// tasks/fetchCryptoData.js
const { fetchCryptoData } = require("../services/cryptoService");
const CryptoPrice = require("../../models/CryptoPrice");

async function executeTask() {
  try {
    const data = await fetchCryptoData();
    console.log("Cryptocurrency Prices (in USD):");
    console.log("--------------------------------");

    for (const coin of Object.keys(data)) {
      const coinData = data[coin];
      const newPrice = new CryptoPrice({
        coin,
        price: coinData.usd,
        marketCap: coinData.usd_market_cap,
        change24h: coinData.usd_24h_change,
      });
      await newPrice.save();
      console.log(`Data for ${coin.toUpperCase()} saved to MongoDB.`);
      console.log(`Coin: ${coin.toUpperCase()}`);
      console.log(`- Current Price: $${coinData.usd}`);
      console.log(`- Market Cap: $${coinData.usd_market_cap.toFixed(2)}`);
      console.log(`- 24h Change: ${coinData.usd_24h_change.toFixed(2)}%`);
      console.log("--------------------------------");
    }
  } catch (error) {
    console.error("Error executing task:", error.message);
  }
}

module.exports = { executeTask };
