import { Group, Router } from "cometjs";
import { ApiController } from "../controllers";

export const apiRoute = (router: Router): void => {
  const group: Group = new Group(router, "/api/v1");

  group
    .get("/users")
    .controller(ApiController, "users")
    .name("api.users");

  group
    .get("/user/[id]")
    .params({
      id: /^\d+$/
    })
    .controller(ApiController, "user")
    .name("api.user");
}
