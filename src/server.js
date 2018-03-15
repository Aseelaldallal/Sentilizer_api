import Hapi from "hapi";

const server = Hapi.server({
  host: "localhost",
  port: 3000
});

// Takes three parameters: Method, Path, Handler
server.route({
  method: "GET",
  path: "/",
  handler: function(request, h) {
    return "This is the homepage";
  } // triggered when you make a request to a specific resource
});

server.route({
  method: "GET",
  path: "/sentilize",
  handler: function(request, h) {
    return "This route will be changed to a POST route later";
  }
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
  }
  console.log("Hapii server is running");
}
