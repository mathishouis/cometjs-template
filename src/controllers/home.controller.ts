import { Controller, Request, Response } from "cometjs";

export class HomeController extends Controller {
  public static index(request: Request, response: Response): void {
    response.status(200);
    response.end("Index");
  }

  public static contact(request: Request, response: Response): void {
    response.status(200);
    response.end("Contact");
  }

  public static about(request: Request, response: Response): void {
    response.status(200);
    response.end("About");
  }
}
