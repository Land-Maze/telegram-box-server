import { Test } from "@nestjs/testing";
import { TestController } from "./test.controller";
import { AuthGuard } from "../../guards/auth.guard";
import { isGuarded } from "../../utils/isGuarded";

describe("TestController", () => {
  let controller: TestController;
  let guard: AuthGuard;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TestController],
      providers: [AuthGuard],
    }).compile();

    controller = moduleRef.get<TestController>(TestController);
    guard = moduleRef.get<AuthGuard>(AuthGuard);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should be guarded by AuthGuard", () => {
    expect(guard.canActivate).toBeDefined();
    expect(isGuarded(TestController, AuthGuard)).toBe(true);
  });
});
