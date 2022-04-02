let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

app.get("/",(req,res)=>{
    console.log("有人请求了服务器");
    res.send("服务器返回的数据");
});

app.listen("8999",()=>{
    console.log("http:localhost:8999");
});