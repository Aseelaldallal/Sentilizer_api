export const routes = [
  // Takes three parameters: Method, Path, Handler
  {
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return "This is the homepage";
    } // triggered when you make a request to a specific resource
  },
  {
    method: "GET",
    path: "/sentilize",
    handler: function(request, h) {
      // h has info/utilities to help manipulate response we'll send back to client
      return "This route will be changed to a POST route later";
    }
  }
];
