import { Group, Router } from "cometjs";
import { AdminController } from "../controllers";
import { AuthenticationMiddleware } from "../middlewares";

export const adminRoute = (router: Router): void => {
  const group: Group = new Group(router, "/admin");

  group
    .get("/login")
    .controller(AdminController, "login")
    .name("admin.authentication.login");

  group
    .get("/register")
    .controller(AdminController, "register")
    .name("admin.authentication.register");

  group
    .get("/dashboard")
    .controller(AdminController, "dashboard")
    .middleware(AuthenticationMiddleware)
    .name("admin.dashboard.index");
}
