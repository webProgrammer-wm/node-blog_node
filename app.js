const http = require('http')
const queryString = require('querystring')
//
// const server = http.createServer((req, res) => {
//     console.log(req.method) // GET
//     const url = req.url
//     console.log(url)
//
//     req.query = queryString.parse(url.split('?')[1])
//     console.log(req.query)
//
//     res.end(
//         JSON.stringify(req.query)
//     )
// })
//
// server.listen(8000)
// console.log('ok')


const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // req 数据格式
        console.log('req content-type', req.headers["content-type"])

        // 接收数据
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData', postData)
            res.end('hello world')
        })
    }
})

server.listen(8000)
console.log('ok')
