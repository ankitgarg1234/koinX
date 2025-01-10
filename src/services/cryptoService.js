require("dotenv").config();

const API_URL = "https://api.coingecko.com/api/v3/simple/price";
const COINS = ["bitcoin", "ethereum", "matic-network"];
const VS_CURRENCY = "usd";

async function fetchCryptoData() {
  const queryParams = new URLSearchParams({
    ids: COINS.join(","),
    vs_currencies: VS_CURRENCY,
    include_market_cap: "true",
    include_24hr_change: "true",
  });

  const url = `${API_URL}?${queryParams.toString()}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

module.exports = { fetchCryptoData };
