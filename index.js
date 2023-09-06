const express = require("express")
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors({
    origin : "*"
}))
// app.use(express.json())

app.get('/Home', (req,res)=>{
    res.send("Welcome to the prepbytes")
})
app.get("/api/readdata",(req,res)=>{
    
    res.send({
        "What is express":"Express is used for designing and building web applications quickly and easily. Web applications are web apps that you can run on a web browser. Since Express. js only requires javascript, it becomes easier for programmers and developers to build web applications and API without any effort.",
        "What is the advantage of Express?":"Express is a minimalist framework that provides a thin layer of basic web app features and includes expert-written code. As a result, when you use Express in your project, you are using high-quality code that results in an excellent performance."
    })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
