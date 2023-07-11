import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    let isAuthorized = false;

    if (request.headers.authorization === "Bearer 1234567890") {
      isAuthorized = true;
    }

    if (!isAuthorized) {
      throw new UnauthorizedException("unauthorized");
    }

    return true;
  }
}
