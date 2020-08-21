import express from "express";
import data from "./data";
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
