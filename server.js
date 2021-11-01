const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const morgan = require("morgan")

const app = express()



app.use(fileUpload({
  createParentPath: true
}))

app.use(cors())
app.use(morgan("dev"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.post("/picture", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {picture} = req.files
  
   
      picture.mv("./uploads/" + picture.name)

      res.send({
        status: true,
        message: picture
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})







app.post("/avatar", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {avatar} = req.files
      console.log(avatar.name)
   
      avatar.mv("./public/avatars/" + avatar.name)

      res.send({
        status: true,
        message: avatar
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})


const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is running on port ${port}`))