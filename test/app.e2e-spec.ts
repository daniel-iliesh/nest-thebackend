import { Test, TestingModule } from '@nestjs/testing';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import type { Response as SuperagentResponse } from 'superagent';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ResumeController (e2e)', () => {
  let app: NestFastifyApplication;
  let resumeFixture: Record<string, unknown>;

  const resumeRegistryUrl =
    'https://registry.jsonresume.org/daniel-iliesh.json';

  const binaryParser = (
    res: SuperagentResponse,
    callback: (err: Error | null, data: Buffer) => void,
  ): void => {
    const chunks: Buffer[] = [];
    res.on('data', (chunk: Buffer) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    res.on('end', () => callback(null, Buffer.concat(chunks)));
    res.on('error', (error: unknown) => {
      const err = error instanceof Error ? error : new Error(String(error));
      callback(err, Buffer.alloc(0));
    });
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();

    const response = await fetch(resumeRegistryUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume fixture: ${response.status}`);
    }
    resumeFixture = (await response.json()) as Record<string, unknown>;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/resume?format=pdf (POST) should return a PDF', async () => {
    const response = await request(app.getHttpServer())
      .post('/resume')
      .query({ format: 'pdf' })
      .set('Content-Type', 'application/json')
      .buffer(true)
      .parse(binaryParser)
      .send(resumeFixture)
      .expect(200);

    expect(response.headers['content-type']).toContain('application/pdf');
    expect(response.headers['content-disposition']).toContain(
      'inline; filename="resume.pdf"',
    );
    expect(Buffer.isBuffer(response.body)).toBe(true);
    expect((response.body as Buffer).length).toBeGreaterThan(0);
  });
});
