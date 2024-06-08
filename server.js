const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let count = 0;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/count", (req, res) => {
  res.json({ count });
});

app.post("/api/increment", (req, res) => {
  const { value } = req.body;
  if (typeof value === "number") {
    count += value;
    res.json({ count });
  } else {
    res.status(400).json({ error: "Invalid value" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
