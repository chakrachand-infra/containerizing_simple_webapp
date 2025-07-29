const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME || 'Default App';
const DB_PASSWORD = process.env.DB_PASSWORD || 'NoSecret';
const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<h1>${APP_NAME}</h1><p>DB Password: ${DB_PASSWORD}</p>`);
});

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} is running on port ${APP_PORT}`);
});
