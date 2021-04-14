const path = require('path');

const port = 3012;

const fastify = require('fastify')({
  logger: true
});

fastify.register(require('fastify-static'), {
  root: path.join(process.cwd(), 'static'),
  prefix: '/static/'
});

fastify.register(require('fastify-cookie'));

// Declare a route
fastify.get('/', function (request, reply) {
  console.log(request.cookies['__todo-app-session__']);
  reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen(port, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});

// Starting with Fastify v3.0.0, middleware is not supported out of the box and requires an external plugin such as fastify-express or middie.
