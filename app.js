const http = require("http");

const Server = http.createServer((req,res)=>{
    res.write("hello word   ");
    res.write("how are you ?")

    res.end();
});

Server.listen(3000);