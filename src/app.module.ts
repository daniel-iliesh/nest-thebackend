import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GithubModule } from "./github/github.module";
import { AppConfigModule } from "./config/config.module";
import { GravatarModule } from "./apis/gravatar/gravatar.module";
import { ResumeModule } from "./resume/resume.module";
import { MailModule } from "./mail/mail.module";

@Module({
  imports: [
    AppConfigModule,
    GithubModule,
    GravatarModule,
    ResumeModule,
    MailModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
