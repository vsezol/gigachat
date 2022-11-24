import fastify from 'fastify';

const server = fastify();

server.get('/ping', async () => 'pong\n');

const port: number = Number(process.env.port) || 3333;

server.listen({ port }, (err: Error, address: string) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
