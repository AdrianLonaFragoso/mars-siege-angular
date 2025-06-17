const awsServerlessExpress = require('aws-serverless-express');
const server = require('./dist/mars-frontend/server/main');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = server.app();

app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(app);
module.exports.serverless = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);