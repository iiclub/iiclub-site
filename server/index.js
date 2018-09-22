
const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const host = process.env.HOST || '127.0.0.1'
//const port = process.env.PORT || 3000
const port = process.env.PORT || 80
const {mongoose} = require("./db/mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const path = require("path");

const Training = require("./model/Training");
const TrainingRegistration = require("./model/TrainingRegistration");

const Carousal = require("./model/carousal");

global.appRoot = path.resolve(__dirname);
app.set('port', port)
console.log("appRoot ",appRoot);
app.use(express.static(appRoot+"/public"));
var appRouter = express.Router();  

appRouter.use(bodyParser.json());
app.use("/",appRouter);
router(appRouter); 

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  console.log("inside async");
  console.log("port ",port);
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  /*app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
  */
 var server = app.listen(port,()=>{
  var port = server.address().port;
  console.log("server started on %s ",port);
  });

}
start() 

/* app.use("/",appRouter);
router(appRouter); 

var server = app.listen(port,()=>{
  var port = server.address().port;
  console.log("server started on %s ",port);
});
 */