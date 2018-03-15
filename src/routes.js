import { sentilize } from "./sentilizer";

export const routes = [
  // Takes three parameters: Method, Path, Handler
  {
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return "This is the homepage";
    } // handler triggered when you make a request to a specific resource
  },
  {
    method: "POST",
    path: "/sentilize",
    handler: function(request, h) {
      // h has info/utilities to help manipulate response we'll send back to client
      const payload = request.payload;
      return sentilize(payload.sentence);
    }
  }
];
