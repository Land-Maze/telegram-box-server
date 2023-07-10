import { Module } from "@nestjs/common";
import { UserModuleModule } from "./user-module/user.module";
import { TestModuleModule } from "./test-module/test.module";

@Module({
  imports: [UserModuleModule, TestModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
