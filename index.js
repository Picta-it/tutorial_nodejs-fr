var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000);

server.views({
  engines: {
    html: require('handlebars')
  },
  layout:       true,
  layoutPath:   "./app/views/layout",
  basePath:     __dirname,
  path:         "./app/views/"
})

// Add the routes
server.route({
  method:   'GET',
  path:     '/',
  handler: function (request, reply) {
    reply.view(
      'index',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/produits',
  handler: function (request, reply) {
    reply.view(
      'produits',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/produits/{id}',
  handler: function (request, reply) {
    reply.view(
      'produits_show',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'POST',
  path:     '/produits',
  handler: function (request, reply) {
    reply.view(
      'produits_create',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'PUT',
  path:     '/produits/{id}',
  handler: function (request, reply) {
    reply.view(
      'produits_edit',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'DELETE',
  path:     '/produits/{id}',
  handler: function (request, reply) {
    reply.view(
      'produits_delete',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/forum',
  handler: function (request, reply) {
    reply.view(
      'forum',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/forum/{id}',
  handler: function (request, reply) {
    reply.view(
      'forum_show',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/forum/{id}/{page}',
  handler: function (request, reply) {
    reply.view(
      'forum_show',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'POST',
  path:     '/forum',
  handler: function (request, reply) {
    reply.view(
      'forum_create',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'POST',
  path:     '/forum/{id}',
  handler: function (request, reply) {
    reply.view(
      'forum_message_create',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'PUT',
  path:     '/forum/{id}',
  handler: function (request, reply) {
    reply.view(
      'forum_edit',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'PUT',
  path:     '/forum/{id}/{message}',
  handler: function (request, reply) {
    reply.view(
      'forum_message_edit',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'DELETE',
  path:     '/forum/{id}',
  handler: function (request, reply) {
    reply.view(
      'forum_delete',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'DELETE',
  path:     '/forum/{id}/{message}',
  handler: function (request, reply) {
    reply.view(
      'forum_message_delete',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/news',
  handler: function (request, reply) {
    reply.view(
      'news',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/news/{id}',
  handler: function (request, reply) {
    reply.view(
      'news_show',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'POST',
  path:     '/news',
  handler: function (request, reply) {
    reply.view(
      'news_create',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'PUT',
  path:     '/news/{id}',
  handler: function (request, reply) {
    reply.view(
      'news_edit',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'DELETE',
  path:     '/news/{id}',
  handler: function (request, reply) {
    reply.view(
      'news_delete',
      {},
      { layout: 'main' }
    );
  }
});

server.route({
  method:   'GET',
  path:     '/contact',
  handler: function (request, reply) {
    reply.view(
      'contact',
      {},
      { layout: 'main' }
    );
  }
});

// Start the server
server.start();
