import { Test } from "@nestjs/testing";
import { AuthGuard } from "../auth.guard";
import { UnauthorizedException } from "@nestjs/common";

describe("AuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthGuard],
    }).compile();

    guard = moduleRef.get<AuthGuard>(AuthGuard);
  });

  it("should be defined", () => {
    expect(new AuthGuard()).toBeDefined();
  });

  it("should allow access with valid authorization", () => {
    const mockRequest = {
      headers: {
        authorization: "Bearer 1234567890",
      },
    };
    const mockExecutionContext = {
      switchToHttp: () => ({
        getRequest: jest.fn().mockReturnValue(mockRequest),
      }),
    };

    const result = guard.canActivate(mockExecutionContext as any);
    expect(result).toBe(true);
  });

  it("should throw UnauthorizedException with invalid authorization", () => {
    const mockRequest = {
      headers: {
        authorization: "Bearer invalid",
      },
    };
    const mockExecutionContext = {
      switchToHttp: () => ({
        getRequest: jest.fn().mockReturnValue(mockRequest),
      }),
    };

    expect(() => guard.canActivate(mockExecutionContext as any)).toThrowError(
      UnauthorizedException,
    );
  });
});
