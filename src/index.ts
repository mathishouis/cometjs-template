import { Comet, Router } from "cometjs";
import { webRoute, apiRoute, adminRoute } from "./routes";

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
const app: Comet = new Comet()
  .use(router)
  .listen("127.0.0.1", 5173);
