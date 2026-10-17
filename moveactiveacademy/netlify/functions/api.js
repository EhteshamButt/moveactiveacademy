require('reflect-metadata');
const serverless = require('serverless-http');
const express = require('express');

let cachedHandler = null;
let initError = null;

async function getHandler() {
  if (initError) return null;
  if (cachedHandler) return cachedHandler;

  try {
    const { NestFactory } = require('@nestjs/core');
    const { ExpressAdapter } = require('@nestjs/platform-express');
    const { AppModule } = require('../../dist/app.module');

    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter, { logger: ['error', 'warn'] });
    app.enableCors({ origin: '*' });
    await app.init();
    cachedHandler = serverless(expressApp);
    return cachedHandler;
  } catch (err) {
    initError = err;
    console.error('[api] NestJS init failed:', err.message, err.stack);
    return null;
  }
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const fn = await getHandler();
  if (!fn) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Service unavailable',
        detail: initError ? initError.message : 'Unknown init error',
      }),
    };
  }
  return fn(event, context);
};
