# KoinX Repository

## Clone the Repository
```bash
https://github.com/ankitgarg1234/koinX.git
```

## Install Packages
```bash
npm i
```

## Set Up Environment Variables
Create a `.env` file and include the following keys:
```env
COINGECKO_API_KEY=<your_api_key>
MONGO_URI=<your_mongo_uri>
```

### How to Get `COINGECKO_API_KEY`
- Visit [CoinGecko API Documentation](https://docs.coingecko.com/v3.0.1/reference/introduction).
- Create a free account.
- Generate and copy your API key.

### How to Get `MONGO_URI`
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a cluster.
- Obtain your connection string (Mongo URI).

## Run the Server
```bash
node index.js
```

## Testing APIs

### `/stats` API
Test using the following endpoint (modify the `coin` query parameter as needed, e.g., `bitcoin`, `matic-network`, `ethereum`):
```bash
http://127.0.0.1:3000/api/stats?coin=matic-network
```

### `/deviation` API
Test using the following endpoint (modify the `coin` query parameter as needed, e.g., `bitcoin`, `matic-network`, `ethereum`):
```bash
http://127.0.0.1:3000/api/deviation?coin=matic-network
