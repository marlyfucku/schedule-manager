import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'node:path'
import fastifyPostgres from '@fastify/postgres'
import { loadEnvFile } from 'node:process'

loadEnvFile('.env')

const __dirname = import.meta.dirname

const fastify = Fastify({
  logger: true,
})

// Регистрируем PostgreSQL
fastify.register(fastifyPostgres, {
  connectionString: process.env.CONNECTION_STRING,
})

// Регистрируем статику
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../builds'),
})

// Регистрируем API маршруты
fastify.register(async (fastify) => {
  await fastify.register(import('./routes/teachers.js'), { prefix: '/apiv1' })
  // await fastify.register(import('./routes/subjects.js'), { prefix: '/apiv1' })
  // await fastify.register(import('./routes/groups.js'), { prefix: '/apiv1' })
})

// SPA fallback
fastify.get('/admin', (req, reply) => reply.sendFile('admin/index.html'))
fastify.get('/admin/*', (req, reply) => reply.sendFile('admin/index.html'))
fastify.get('/publications', (req, reply) => reply.sendFile('public/index.html'))
fastify.get('/publications/*', (req, reply) => reply.sendFile('public/index.html'))

// Запуск сервера
try {
  await fastify.listen({ port: 3000 })
}
catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
