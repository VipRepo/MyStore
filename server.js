// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';
import "./config/mongo-connect";


// listen on port config.port
app.listen(config.port, () => {
  console.info(`Server started on port ${config.port} (${config.env})`);
});

export default app;
