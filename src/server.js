const fastify = require('fastify')

function build (opts = {}) {
  const server = fastify(opts)

  server.get('/__/health', async (request, reply) => {
    return { status: 'ok' }
  })

  return server
}

module.exports = build
