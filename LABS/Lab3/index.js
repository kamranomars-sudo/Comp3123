var http = require("http");
let fs =require("fs")
let users = require ("./data.js")
const {sttringify}= require ("querystring")
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");



//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write("<h1>NodeJS Web Server at the root</h1>") 
            res.write("<p>Welcome to the root path at the server </p>")
            res.end ()
        }

        if (req.url === '/users') {
            //Convert from json object to json string
            let data = JSON.stringify(users.users.id) 
            res.write(data)
            res.end()
        }

        if (req.url === '/names') {
            res.writeHead(200,{"content-type": "text/html"})
           res.write("<article>Kamran Omar</article>")
          res.end()

        }

        if (req.url === '/userlist') {
            fs.readFile(__dirname+ "/employees.json", "utf-8", (error,data) => {
                res.write(data)
                res.end()

            })

        }
    }
    })

    
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
