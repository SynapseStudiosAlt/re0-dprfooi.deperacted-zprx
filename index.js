const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration
const proxyOptions = {
    target: 'https://example.com', // Replace with your target server
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
};

app.use('/', createProxyMiddleware(proxyOptions));

// Start the server
const PORT = 3000; // Change this if needed
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
