require('dotenv').config()
const express=require('express')
const app=express()
const port=4000
const githubData={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}
app.get('/',(req,res)=>{
    res.send("Hii, I am from Home.")
})

app.get('/sakin',(req,res)=>{
    res.send("Hii, I am sakin.")
})

app.get('/jannat',(req,res)=>{
    res.send("<h1>Hii, I am jannat.</h1>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log("I am running")
})
