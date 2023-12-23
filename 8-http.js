const http = require("http");

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.end(`<h1>This is our home page!</h1>`);
    }else if(request.url === '/about'){
        response.end(`<h1>This is our about page!</h1>`);
    }else{
        response.end(`<a href='/'> Back to home </a>`);
    }
})

server.listen(5000);