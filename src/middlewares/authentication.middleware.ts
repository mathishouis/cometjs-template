import { BaseMiddleware, Closure, Handler, Middleware, Request } from "cometjs";

@Middleware()
export class Authenticated extends BaseMiddleware {

  @Handler()
  handle(request: Request, next: Closure): void {
    console.log("middleware!");
    next();
  }

}
