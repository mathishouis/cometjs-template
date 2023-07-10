import { Comet, Router } from "cometjs";
import { config } from "dotenv";
import { AdminController, ApiController, HomeController } from "./controllers";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user.model";

/**
 * Environment configuration initialization
 */
config();

/**
 * CometJS initialization
 */

const initialize = (): void => {
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
}

/**
 * Database initialization
 */
export const dataSource: DataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: "cometjs",
  synchronize: true,
  logging: true,
  entities: [
    User,
  ]
});
dataSource.initialize()
  .then(() => {
    initialize();
  })
  .catch((error) => console.log(error));
