import express, { json } from "express";

const app = express();

app.use(json());

console.log("hello world");

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
