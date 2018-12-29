// Dependencies
const express = require("express");
const mathRoutes = require("./routes/mathRoutes");
const gameRoutes = require("./routes/gameRoutes");

// Set the port of our application
const PORT = 4444;

// Create express app instance.
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// Static assets location
app.use(express.static('public'));

// Routes
// Sometimes I would use (app) but not today.
app.use("/math", mathRoutes);
app.use("/game", gameRoutes);
app.get("/", function(req,res) {
  res.render('count');
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log on the server-side when when server has started
  console.log("App is now listening for requests on http://localhost:" + PORT);
});
