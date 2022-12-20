//@ts-check
const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end("hello")
})

server.listen(4000, () => {
  console.log("server running on 4000")
})
