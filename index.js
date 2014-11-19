var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000);

server.views({
  engines: {
    html: require('handlebars')
  },
  basePath:  __dirname,
  path:      "./app/views/"
})

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.view('index', {
      title: 'Mon premier site'
    });
  }
});

// Start the server
server.start();
