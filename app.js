// /////////////////////////////    كل الكونستات/////////////////////////////////////
const express = require('express')
const app = express()
const port = 8080
const helmet = require("helmet");
 



app.set('view engine', 'ejs')
app.use(express.static('public'))
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

app.use(express.urlencoded({ extended: true }));
const fahadd = require('./routes/get')

//  /////////////////////////      mongoose/////////////////////////////////
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const mongoose = require('mongoose');
const e = require('express')

mongoose.connect(
  "mongodb+srv://fahad3068088:3068088fa@cluster0.fs06ruv.mongodb.net/fahad?retryWrites=true&w=majority")
  .then( result => {
    app.listen(process.env.PORT||port, () => {
      console.log(`Example app listening at  http://localhost:${port}`);
    }
    
  );
  })
  .catch( err => {
    console.log("في خطا");
  });

// ////////////////////////   get   ////////////////////////////////////
app.use(helmet()); 

app.use(fahadd)


    app.use(function (req, res) {
  res.send(`خطا`)

})

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})
