import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const whitelist = ["http://localhost:5173"]; // assuming front-end application is running on localhost port 3000

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.post("/", (req, res) => {
  console.log("body is", req.body);
  let data = JSON.stringify(req.body);
  fs.writeFileSync(`${req.body.email}.json`, data);
  res.send("message sent");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
