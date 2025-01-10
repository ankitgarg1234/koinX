
// Handler for /status route
const CryptoPrice = require("../../models/CryptoPrice");
const getStats = async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Coin query parameter is required." });
  }

  try {
    // Fetch the latest entry for the specified coin from the database
    const latestData = await CryptoPrice.findOne({ coin }).sort({
      createdAt: -1,
    });

    if (!latestData) {
      return res
        .status(404)
        .json({ error: "Data for the specified coin not found." });
    }

    // Respond with the latest data
    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      "24hChange": latestData.change24h,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Handler for /deviation route
const getDeviation = async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Coin query parameter is required." });
  }

  try {
    // Fetch the last 100 records for the specified coin from the database
    const records = await CryptoPrice.find({ coin })
      .sort({ createdAt: -1 })
      .limit(100);

    if (records.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the specified coin." });
    }

    // Extract the prices from the records
    const prices = records.map((record) => record.price);

    // Calculate the mean (average) price
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    // console.log(mean);

    // Calculate the variance
    const variance =
      prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
      prices.length;
//   console.log(variance);
    // Calculate the standard deviation
    const standardDeviation = Math.sqrt(variance);

    // Respond with the standard deviation
    res.json({ deviation: standardDeviation });
  } catch (error) {
    console.error("Error fetching deviation:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  getStats,
  getDeviation,
};
