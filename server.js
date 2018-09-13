//  // -------------------------------
//     // Import Node Modules
//     // -------------------------------
//     require("dotenv").config();
//     const cors = require("cors");
//     const Pusher = require("pusher");
//     const express = require("express");
//     const bodyParser = require("body-parser");

//        // ------------------------------
//     // Create express app
//     // ------------------------------
//     const app = express();
//     // ------------------------------
//     // Load the middlewares
//     // ------------------------------
//     app.use(cors());
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: false }));

//     var pusher = new Pusher({
//         appId: `593632`,
//         key: `81b993082381a609dc8a`,
//         secret: `cf8eb4f883c704742033`,
//         cluster: `ap2`,
//         encrypted: true
//       });
//         // ....
//     // const pusher = new Pusher({
//     //     appId: `${process.env.PUSHER_APP_ID}`,
//     //     key: `${process.env.PUSHER_API_KEY}`,
//     //     secret: `${process.env.PUSHER_API_SECRET}`,
//     //     cluster: `${process.env.PUSHER_APP_CLUSTER}`,
//     //     encrypted: true
//     // });

//        // -------------------------------
//     // Create app routes
//     // -------------------------------
//     app.post("/update", function(req, res) {
//         // -------------------------------
//         // Trigger pusher event
//         console.log("dfds");
//         // ------------------------------
//         pusher.trigger("events-channel", "new-like", {
//           likes : `${req.body.likes}`
//         });
//     });

//     app.listen("3120");
//     console.log("Listening on localhost:3120");

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

    
io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});    
  });
});
var portd=process.env.PORT;
 http.listen(portd, () => {
   console.log(http);
 });