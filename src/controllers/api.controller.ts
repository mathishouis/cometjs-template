import { BaseController, Controller, Get, Request, Response } from "cometjs";

interface User {
  id: number;
  username: string;
  email: string;
}

const data: User[] = [
  {
    id: 1,
    username: "Eplouksis",
    email: "eplouksis93@gmail.com"
  },
  {
    id: 2,
    username: "zouzoulamenace",
    email: "zouzou95@yahoo.com"
  },
  {
    id: 3,
    username: "Pi-Bouf",
    email: "chauve@pascheveux.fr"
  }
];

/*export class ApiController extends Controller {
  public static users(request: Request, response: Response): void {
    response.json(data);
  }

  public static user(request: Request, response: Response): void {
    const id: number = Number(request.params.id);
    const user: User | undefined = data.find((user: User) => user.id === id);
    if (user) response.json(user);
    else response.json({ error: true, message: "User not found." });
  }
}*/

@Controller("/api/v1")
export class ApiController extends BaseController {

  @Get("api.users", "/users")
  users(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Api Users");
  }

  @Get("api.user", "/user/[id]", { id: /^\d+$/ })
  user(request: Request, response: Response): void {
    response.writeHead(200);
    response.end("Api user");
  }

}
