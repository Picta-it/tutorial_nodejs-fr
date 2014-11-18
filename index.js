var Hapi = require('hapi')


var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000);

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello World !!');
  }
});

// Start the server
server.start();
