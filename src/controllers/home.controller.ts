import { BaseController, Controller, Get, Middleware, Request, Response } from "cometjs";
import { Authenticated } from "../middlewares";

@Controller()
export class HomeController extends BaseController {

  @Get("home.index", "/")
  index(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Index");
  }

  @Get("home.contact", "/contact")
  @Middleware(Authenticated)
  contact(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Contact");
  }

  @Get("home.about", "/about")
  about(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("About");
  }

}
