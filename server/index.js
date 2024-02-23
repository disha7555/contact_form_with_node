const express = require("express")
const path = require("path")
const app = express()
const ContactCollection = require("./mongo");
const bodyParser = require("body-parser");
const port = 5000;
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const publicPath = path.join(__dirname, '../public')
//console.log(publicPath);
const publicDirPath=path.join(__dirname , '..' ,'public');
//console.log(publicDirPath , 'success.html')
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(publicDirPath + '/index.html');
})
app.get('/success', (req, res) => {
    res.sendFile(publicDirPath + '/success.html');
  })
  app.get('/fail', (req, res) => {
    res.sendFile(publicDirPath + '/fail.html');
  })
app.post('/submit', async (req, res) => {
    
   
    const data = {
        name: req.body.name,
        email:req.body.email,
        mobile_no:req.body.mobile_no
    }
   try{
    
        await ContactCollection.insertMany([data])
        res.redirect('/success');
       
        
   }
   catch{
    res.redirect('/fail');
   }
})
app.listen(port, () => {
    console.log('port connected');
})