const cron = require("node-cron");
const express = require("express");
const app = express();
const { executeTask } = require("./src/tasks/fetchCryptoData");
const connectDB = require("./config/db");
const apiRoutes = require("./src/routes/apiRoutes");
connectDB();
// Schedule the task to run every minute
cron.schedule("* * * * *", () => {
  console.log("Fetching cryptocurrency data...");
  executeTask();
});

console.log(
  "Crypto Fetcher Service is running. Data will be fetched every minute."
);
app.use(express.json());
// Use the API routes
app.use("/api", apiRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});