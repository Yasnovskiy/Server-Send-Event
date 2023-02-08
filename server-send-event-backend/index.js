
// const cors = require(`cors`);
// const bodyParser = require(`body-parser`);

// const express = require("express")
// const app = express()
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // const fs = require("fs")
// // const path = require("path")
// // ##############################
// // const globalVersion = 0
// const companies = {
//   "aaa":{"subscribers": 0},
//   "w3certified":{"subscribers": 0},
//   "bbb":{"subscribers": 0},
// }

// // ##############################
// // app.get("/", (req, res) => {
// //   var html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8")
// //   res.status(200).send(html)
// // })

// // ##############################
// app.get("/subscribe/:companyId", (req, res) => {
//   console.log(`Subscribed to: ${req.params.companyId}`)
//   companies[req.params.companyId].subscribers++
//   console.log(companies)
//   // globalVersion++
//   res.status(200).json({"message":`subscribed to company ${req.params.companyId}`})
// })

// // ##############################
// app.get("/sse", (req, res) => {

//   res.set("Content-Type", "text/event-stream")
//   res.set("Connection", "keep-alive")
//   res.set("Cache-Control", "no-cache")
//   // res.setHeader('Access-Control-Allow-Origin', '*')
  
//   console.log("client connected to sse")

//   setInterval(function() {
//       res.status(200).write(`data: ${JSON.stringify(companies)}\n\n`)
//   }, 100)
// }) 

// // ##############################
// app.listen(5555, err => {
//   if(err){console.log("Server cannot listen..."); return}
//   console.log("Server listening...")
// })

const cors = require(`cors`);
const bodyParser = require(`body-parser`);

const express = require("express")
const app = express();

// app.use();
const http = require('http');

app.get('/streaming', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader("Connection", "keep-alive")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader('Access-Control-Allow-Origin', '*')

  let counter = 0;
  let interValID = setInterval(() => {
      counter++;
      console.log('counter', counter);

      if (counter >= 10) {
          clearInterval(interValID);
          res.end(); // terminates SSE session
          return;
      }
      res.write(`data: ${JSON.stringify({num: counter})}\n\n`);
      // res.write(`id: ${i++}\n`)
      // res.write(`event: test\n`)
      // res.write('data: test\n\n')
      // res.write() instead of res.send()
  }, 1000);

  // If client closes connection, stop sending events
  res.on('close', () => {
      console.log('client dropped me');
      clearInterval(interValID);
      res.end();
  });
})

app.get('/color', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader("Connection", "keep-alive")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader('Access-Control-Allow-Origin', '*')

  let counter = 0;
  let interValID = setInterval(() => {
      counter++;
      console.log('counter', counter);

      if (counter >= 10) {
          clearInterval(interValID);
          res.end(); // terminates SSE session
          return;
      }
      res.write(`data: ${JSON.stringify({num: counter})}\n\n`);
      // res.write(`id: ${i++}\n`)
      // res.write(`event: test\n`)
      // res.write('data: test\n\n')
      // res.write() instead of res.send()
  }, 1000);

  // If client closes connection, stop sending events
  res.on('close', () => {
      console.log('client dropped me');
      clearInterval(interValID);
      res.end();
  });
})

app.listen('5555', (err) => {
  if(err){console.log("Server cannot listen..."); return}
    console.log("Server listening...")
});

// let i = 0;
// http.createServer(function(req, res) {
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader("Connection", "keep-alive")
//   res.setHeader("Cache-Control", "no-cache")
//   res.setHeader('Access-Control-Allow-Origin', '*')

//   console.info('test');
//   res.write('data: test\n\n'); 
//   setInterval(() => {
//     res.write(`id: ${i++}\n`)
//     res.write(`event: test\n`)
//     res.write('data: test\n\n')
//   }, 1000);

//   if (Object.has({em, color, obj})) {
//     res.write(`event: close\n`)
//     res.write('data: ура\n\n')
//   }

// }).listen(5555);

console.info('Listen...')