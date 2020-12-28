require('dotenv').config()
const fastify = require('fastify')({ logger: true })

const port = process.env.PORT || 3000

fastify.get('/__/health', async (request, reply) => {
  return { status: 'ok' }
})

const start = async () => {
  try {
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
