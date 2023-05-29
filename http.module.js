const http = require(`http`);


//we will assign it to a function which has a callback that has two parameters:
//objects(common practice is req(Incoming request) and res(what we are sending back))

const server = http.createServer( (req,res) => {
    if (req.url === `/`){
        res.end('Welcome to our homepage')
    }
    if (req.url === `/about`){
        res.end('Here is a short history')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We can't seem to find the page</p>
    <a href="/">back home</a>
    `)      
}) 

//we also need to set up the port our server will be listening to:

server.listen(5000)