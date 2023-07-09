import { Group, Router } from "cometjs";
import { HomeController } from "../controllers";

export const webRoute = (router: Router): void => {
  const group: Group = new Group(router);

  group
    .get("/")
    .controller(HomeController, "index")
    .name("home.index");

  group
    .get("/contact")
    .controller(HomeController, "contact")
    .name("home.contact");

  group
    .get("/about")
    .controller(HomeController, "about")
    .name("home.about");
}
