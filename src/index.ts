import { Comet, Router } from "cometjs";
import { config } from "dotenv";
import { AdminController, ApiController, HomeController } from "./controllers";

/**
 * Environment configuration initialization
 */
config();

/**
 *  Route initialization
 */
const router: Router = new Router();
router.controller(HomeController);
router.controller(ApiController);
router.controller(AdminController);

/**
 * Comet initialization
 */
const host: string = process.env.APP_HOST ?? "127.0.0.1";
const port: string = process.env.APP_PORT ?? "8080";

const app: Comet = new Comet()
  .use(router)
  .listen(host, Number(port));
