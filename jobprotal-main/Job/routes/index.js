// routes/index.js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Job Portal Backend Running with Sentry");
});


export default router;
