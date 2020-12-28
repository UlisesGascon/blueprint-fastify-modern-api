const request = require('supertest')
const buildFastify = require('./server')

let fastify

beforeAll(async () => {
  fastify = buildFastify()
  await fastify.ready()
})

afterAll(() => {
  fastify.close()
})

it('healthy endpoint. GET /__/health', async () => {
  const res = await request(fastify.server)
    .get('/__/health')
    .send()

  expect(res.statusCode).toEqual(200)
  expect(res.body).toEqual({ status: 'ok' })
})
