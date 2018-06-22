import mongoose from 'mongoose';
import config from "./config";

mongoose.Promise = global.Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });

mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to mongo database: ${mongoUri}`);
});     

mongoose.set('debug', true);