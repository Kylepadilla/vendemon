const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes/api/users");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 5000;
// require socket io for chat feature
const socket = require('socket.io');
const users = require("./routes/api/users");
const alerts = require("./routes/api/alerts");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vendemon");
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/alerts", alerts);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const server = app.listen(8080, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })
});
