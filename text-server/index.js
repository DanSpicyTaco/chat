import "dotenv/config";
import express from "express";
import Replicate from "replicate";

const app = express();
const replicate = new Replicate();

const port = process.env.PORT;
const apiKey = process.env.REPLICATE_API_TOKEN;

app.post("/", async (req, res) => {
  // Get the model and prompt from the request

  const [output] = await replicate.run(req.model, {
    input: {
      prompt: req.prompt,
    },
  });

  res.send({ output });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
