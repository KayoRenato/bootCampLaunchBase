const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
// const colleges = require("./data/dataAbout")
const videos = require("./data/dataPortifolio")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req,res){
  const dbAbout = {
    avatar: "https://avatars2.githubusercontent.com/u/39072902?s=460&v=4",
    name:"Kayo Renato",
    purpose: "Engineer, manager and developer full-stack, developing solutions to simplify people's daily lives.",
    qualification: [
      {
        institute: "UFPE",
        formation: "Bachelor in Civil Engineering",
        degree: "https://drive.google.com/file/d/1eElOkAXP3f08d0LqLyrFoRZSfN3-bmFe/preview",
    
      },
      {
        institute: "FGV",
        formation: "Master of Business Administration in Project Managemet",
        degree: "https://drive.google.com/file/d/1hq5UeUGxAzx3Z-6b8A16wzGN8_6gOVeA/preview",
      },
      {
        institute: "UFPE",
        formation: "Master of Science in Production Engineering (Decision Making and Risk Analyis)",
        degree: "https://drive.google.com/file/d/1DNux7xrOkxQasVEbPEDP5QnXF9Q8j58u/preview",
      },
      {
        institute: "UPE",
        formation: "Bachelor in Information Systems",
        degree: "https://i0.wp.com/www.siamdevelopment.com/wp-content/uploads/2018/06/coming-soon.png?fit=791%2C359",
      },
  
    ]
  }

  return res.render("about", {dbAbout})
})

server.get('/', function(req,res){
  return res.render("layout")
})

server.get('/portfolio', function(req,res){
  return res.render("portfolio", {items: videos})
})

server.get('/video', function (req, res) {
  const id = req.query.id
    const video = videos.find(item => item.id === id)

  if (!video) {
    return res.send('Video not found!')
  }

  return res.render("video", { item: video })
})

server.listen(5000, function(){
  console.log("server is running")
})
