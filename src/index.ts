import { Comet, Router } from "cometjs";
import { webRoute, apiRoute, adminRoute } from "./routes";
import { config } from "dotenv";

/**
 * Environment configuration initialization
 */
config();

/**
 *  Route initialization
 */
const router: Router = new Router();
webRoute(router);
apiRoute(router);
adminRoute(router);

/**
 * Comet initialization
 */
const host: string = process.env.APP_HOST ?? "127.0.0.1";
const port: string = process.env.APP_PORT ?? "8080";

const app: Comet = new Comet()
  .use(router)
  .listen(host, Number(port));
