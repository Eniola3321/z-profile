import express from "express";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);
app.use(cors());
app.use(morgan("dev"));

app.get("/me", async (req, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    const responseData = await response.json();
    const catFact = responseData.fact;

    const data = {
      status: "success",
      user: {
        email: process.env.MY_EMAIL,
        name: process.env.MY_NAME,
        stack: process.env.MY_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    console.error("❌ Error fetching cat fact:", error.message);

    const data = {
      status: "success",
      user: {
        email: process.env.MY_EMAIL,
        name: process.env.MY_NAME,
        stack: process.env.MY_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact right now. Try again later ",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
