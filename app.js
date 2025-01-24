const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 7856;

const cors = require("cors");
app.use(cors());

app.disable("x-powered-by");

const helmet = require("helmet");
app.use(helmet());

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(cookieParser());
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
