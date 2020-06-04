const http = require('http')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
    console.log(req.method) // GET
    const url = req.url
    console.log(url)

    req.query = queryString.parse(url.split('?')[1])
    console.log(req.query)

    res.end(
        JSON.stringify(req.query)
    )
})

server.listen(8000)
console.log('ok')
