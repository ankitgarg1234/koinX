// models/CryptoPrice.js
const mongoose = require("mongoose");

const CryptoPriceSchema = new mongoose.Schema(
  {
    coin: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    change24h: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const CryptoPrice = mongoose.model("CryptoPrice", CryptoPriceSchema);

module.exports = CryptoPrice;
