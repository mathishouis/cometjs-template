import { Closure, Middleware, Request } from "cometjs";

export class AuthenticationMiddleware extends Middleware {
  handle(request: Request, next: Closure): void {
    // Implement auth verification
    return next(request);
  }
}
