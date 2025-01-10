--> clone the repo 
    https://github.com/ankitgarg1234/koinX.git

--> install all the packages 
    npm i
 
--> make a .env file to keep all the environemnt variable
    COINGECKO_API_KEY  
    MONGO_URI

--> How to get COINGECKO_API_KEY 
    https://docs.coingecko.com/v3.0.1/reference/introduction login to this link and create a free account and get the API key

--> How to get MONGO_URI 
    go to mongodb atlas, create the cluster and get it from there

--> run the server
    node index.js

--> testing the /stats api (chnage the coin query acc to the need e.g. bitcoin, matic-network, ethereum)
    http://127.0.0.1:3000/api/stats?coin=matic-network

--> testing the /deviation api (chnage the coin query acc to the need e.g. bitcoin,  matic-network, ethereum)
    http://127.0.0.1:3000/api/deviation?coin=matic-network
