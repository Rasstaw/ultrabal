import express from "express";
import eventsRoute from "./routes/event.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/events", eventsRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("server is running ");
});
