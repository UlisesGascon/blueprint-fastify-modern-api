const fastify = require('fastify')
const { name, version } = require('../package.json')

function build (opts = {}) {
  const server = fastify(opts)

  server.get('/__/health', async (request, reply) => {
    return { status: 'ok' }
  })

  server.get('/__/manifest', async (request, reply) => {
    return { name, version }
  })

  return server
}

module.exports = build
