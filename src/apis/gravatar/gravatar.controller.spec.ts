import { Test, TestingModule } from '@nestjs/testing';
import { GravatarController } from './gravatar.controller';

describe('GravatarController', () => {
  let controller: GravatarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GravatarController],
    }).compile();

    controller = module.get<GravatarController>(GravatarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
