const express = require('express');
const fs = require('fs');
const path = require('path');
const { router } = require('../src/index.prod');
const React = require('react');
const { createStaticHandler } = require('react-router-dom/server');
const { StaticRouterProvider } = require('react-router-dom');
const { createStaticRouter, ReactDOMServer } = require('react-dom/server');

const PORT = 8000;
const app = express();

const createFetchRequest = require('./request');
let handler = createStaticHandler(router);

app.get('*', async (req, res) => {
  let fetchRequest = createFetchRequest(req, res);
  let context = await handler.query(fetchRequest);

  let router = createStaticRouter(handler.dataRoutes, context);
  let html = ReactDOMServer.renderToString(<StaticRouterProvider router={router} context={context} />);

  res.send('<!DOCTYPE html>' + html);
});
app.listen(PORT, () => {
  console.log(`Express server started at <http://localhost:${PORT}>`);
});
