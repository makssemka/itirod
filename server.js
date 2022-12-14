const express = require("express");
const path = require("path");

const app = express();

app.use(
  express.static(path.resolve(__dirname, "public"), { extensions: ["js"] })
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
  console.log("App is listening");
});
