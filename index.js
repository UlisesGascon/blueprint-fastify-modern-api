require('dotenv').config()
const port = process.env.PORT || 3000

const server = require('./src/server')({
  logger: true
})

server.listen(port, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${server.server.address().port}`)
})
