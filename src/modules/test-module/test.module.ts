import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";
import { AuthGuard } from "src/guards/auth.guard";

@Module({
  controllers: [TestController],
})
export class TestModuleModule {}
