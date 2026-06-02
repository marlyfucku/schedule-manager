import {
  getPublications,
  publishSchedules,
  unpublishAll,
} from '../controllers/publications.js';

export default async function publicationsRoutes(fastify) {
  fastify.get('/publications', async (req, reply) => {
    const publications = await getPublications(fastify);
    reply.send(publications);
  });

  fastify.post('/publications', async (req, reply) => {
    const result = await publishSchedules(fastify);
    reply.status(201).send(result);
  });

  fastify.delete('/publications', async (req, reply) => {
    const result = await unpublishAll(fastify);
    reply.send(result);
  });
}
