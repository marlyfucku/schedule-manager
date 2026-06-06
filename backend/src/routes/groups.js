import { createGroup, deleteGroup, getGroups, updateGroup } from '../controllers/groups.js';
import { getPublishedLessonsByGroup } from '../controllers/publications.js';

export default async function teachersRoutes(fastify) {
  fastify.get('/groups', async (req, reply) => {
    const groups = await getGroups(fastify);
    reply.send(groups);
  });

  // public
  fastify.get('/groups/lessons', async (req, reply) => {
    const { id, date } = req.query;
    const lessons = await getPublishedLessonsByGroup(fastify, id, date);
    reply.send(lessons);
  });

  fastify.post('/groups', async (req, reply) => {
    const result = await createGroup(fastify, req.body);
    reply.status(201).send(result);
  });

  fastify.delete('/groups', async (req, reply) => {
    const groupId = req.body;
    const result = await deleteGroup(fastify, groupId);
    reply.status(201).send(result);
  });

  fastify.put('/groups', async (req, reply) => {
    const id = req.body;
    const result = await updateGroup(fastify, id);
    reply.status(201).send(result);
  });
}
