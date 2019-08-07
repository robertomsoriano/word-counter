const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const path = require("path");
// Initialize Express App
const app = express();

// Allow cross-origin
app.use(cors());
app.options("*", cors());

// BodyParser Middleware
app.use(express.json());

// DB config
const db = process.env.MONGO_URI;
// Connect to MongoDB

const options = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(db, options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log(
        "MongoDB connection unsuccessful, retry after 5 seconds.",
        err
      );
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// Use Routes
//to get counter
app.use("/", require("./routes"));

// for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "static")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "static", "index.html"));
  // });

  // set the view engine to ejs
  app.set("view engine", "ejs");

  // use res.render to load up an ejs view file

  // index page

  app.get("/", async function(req, res) {
    await res.render("pages/index", {
      count: "Loading..."
    });
  });
}

// Listen on port 80, or env var provided.
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server started`));
