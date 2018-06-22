#Steps to run project:
1. Install Mongodb and run mongod command.
2. Loading dump data into mongo
    a. Download data dump
    b. Import data using below commands:
        mongoimport -d crypto -c Litecoin --type csv --file ltc.csv --headerline
        mongoimport -d crypto -c Bitcoin --type csv --file btc.csv --headerline
        mongoimport -d crypto -c Dogecoin --type csv --file doge.csv --headerline
        mongoimport -d crypto -c Ethereum --type csv --file eth.csv --headerline
3. Provide host and port configuration in .env file.
4. npm install.
5. npm start.
6. Click on http://localhost:9081/api/health-check and verify OK is coming.

#Endpoints:
http://localhost:9081/api/currencies/
http://localhost:9081/api/currencies/LTC
http://localhost:9081/api/currencies/LTC/latest


