import { BaseController, Controller, Get, Middleware, Request, Response } from "cometjs";
import { Authenticated } from "../middlewares";

@Controller("/admin")
export class AdminController extends BaseController {

  @Get("admin.login", "/login")
  login(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Admin Login");
  }

  @Get("admin.register", "/register")
  register(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Admin Register");
  }

  @Get("admin.dashboard", "/dashboard")
  @Middleware(Authenticated)
  dashboard(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Admin Dashboard");
  }

}
