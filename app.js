const express = require("express");
const app = express();
const path = require("path");
app.listen(8080,()=>console.log(`listening at port 8080`));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");

const routes = require("./routes");


app.use("/",routes);

//404 page
app.use((req,res)=>{
    res.status(404)
    res.send("Page Not Found")
})