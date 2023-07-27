const h = require("http");

const Server = h.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("hello guys, ");
        res.write("how are you ?")
    }
    if(req.url == "/about"){
        res.write("i am in about page");
    }
    else{
        res.write("page not found")
    }
    

    res.end();
});

Server.listen(4000);

// const circle = require("./circle");
// const c = new circle();
// console.log(c.area(5),c.circumference(5));
