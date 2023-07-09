import { Controller, Request, Response } from "cometjs";

export class AdminController extends Controller {
  public static login(request: Request, response: Response): void {
    response.status(200);
    response.end("Admin Login");
  }

  public static register(request: Request, response: Response): void {
    response.status(200);
    response.end("Admin Register");
  }

  public static dashboard(request: Request, response: Response): void {
    response.status(200);
    response.end("Admin Dashboard");
  }
}
