import { Controller, Request, Response } from "cometjs";

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

export class ApiController extends Controller {
  public static users(request: Request, response: Response): void {
    response.json(data);
  }

  public static user(request: Request, response: Response): void {
    const id: number = Number(request.params.id);
    const user: User | undefined = data.find((user: User) => user.id === id);
    if (user) response.json(user);
    else response.json({ error: true, message: "User not found." });
  }
}
