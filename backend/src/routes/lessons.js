import { getLessonsByScheduleId } from '../controllers/lessons.js';

export default async function lessonsRoutes(fastify) {
  fastify.get('/lessons/schedule/:scheduleId', async (req, reply) => {
    const { scheduleId } = req.params;
    const lessons = await getLessonsByScheduleId(fastify, scheduleId);
    reply.send(lessons);
  });
}