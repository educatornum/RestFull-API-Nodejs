// 7) HTTP library ашиглан анхныхаа сэрвэрийг бичих Nodemon ашиглан сэрвэрийг автоматаар рестарт хийх


const http = require("http")
const server = http.createServer((req,res)=>{
    const { headers, url, method} = req;
    console.log(`header ====>`, headers)
    console.log(`url ====> ${url}`)
    console.log(`method ====> ${method}`)
    // res.setHeader("content-type", "text/plan")
    res.write("<h1> Hello </h1>")
    res.end();
})

server.listen(5000, ()=>{
    console.log("5000 lesson....")
})


// npm i nodemon --save-dev