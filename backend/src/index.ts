import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", function (req, res) {
  res.send("Testus");
});

const port = process.env.PORT || 3000;
app.listen(Number(port), "0.0.0.0", async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
