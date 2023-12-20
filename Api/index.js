import express from "express";

const app = express();

app.listen(5000, () => {
  console.log(`server is working on port ${"http://localhost:5000"}`);
});
