const express = require('express');
const path = require('path');
const cors = require('cors');
const serverlessHttp = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 3000;

const vueAppPath = path.resolve(__dirname, '..', 'dist');

app.use(cors());
app.use(express.static(vueAppPath));

// Start the server
app.listen(PORT, () => {
  console.log(`Node.js server running on http://localhost:${PORT}`);
  console.log(`Serving Vue app from: ${vueAppPath}`);
});

const handler = serverlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}

