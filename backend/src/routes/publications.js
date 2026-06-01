import { 
  getPublications, 
  publishAll, 
  unpublishAll,
} from '../controllers/publications.js';

export default async function publishRoutes(fastify) {
  fastify.get('/published-schedules', async (req, reply) => {
    const schedules = await getPublishedSchedules(fastify);
    reply.send(schedules);
  });

  fastify.post('/published-schedules', async (req, reply) => {
    const { scheduleId } = req.body;
    const result = await publishSchedule(fastify, scheduleId, req.user?.name);
    reply.status(201).send(result);
  });

  fastify.delete('/published-schedules', async (req, reply) => {
    const result = await unpublishAll(fastify);
    reply.send(result);
  });

  fastify.get('/public/schedule/:publicId', async (req, reply) => {
    const { publicId } = req.params;
    const lessons = await getPublishedLessons(fastify, publicId);
    reply.send(lessons);
  });
}