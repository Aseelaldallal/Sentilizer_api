import Hapi from "hapi";
import { routes } from "./routes";

const server = Hapi.server({
  host: "localhost",
  port: 3000
});

// Register Routes
routes.forEach(route => {
  server.route(route);
});

// We need to install babel-polyfill
// because async and await are in es7
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
  }
  console.log("Hapii server is running");
}

start();
