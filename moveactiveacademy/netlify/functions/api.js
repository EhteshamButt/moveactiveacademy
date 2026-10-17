require('reflect-metadata');
const serverless = require('serverless-http');
const express = require('express');

let cachedHandler = null;

async function getHandler() {
  if (!cachedHandler) {
    const { NestFactory } = require('@nestjs/core');
    const { ExpressAdapter } = require('@nestjs/platform-express');
    const { AppModule } = require('../../dist/app.module');

    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter, { logger: false });
    app.enableCors({ origin: '*' });
    await app.init();
    cachedHandler = serverless(expressApp);
  }
  return cachedHandler;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const fn = await getHandler();
  return fn(event, context);
};
