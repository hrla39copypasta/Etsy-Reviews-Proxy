const express = require('express');
const morgan = require("morgan");
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

//Navbar endpoints
app.use('/user', createProxyMiddleware({ target: 'http://localhost:8001', changeOrigin: true }));
app.use('/entry', createProxyMiddleware({ target: 'http://localhost:8001', changeOrigin: true }));

//Display product endpoints
app.use('/product-display', createProxyMiddleware({ target: 'http://localhost:8002', changeOrigin: true }));
app.use('/photo-display', createProxyMiddleware({ target: 'http://localhost:8002', changeOrigin: true }));

//Reviews
app.use('/reviewsItem', createProxyMiddleware({ target: 'http://localhost:8003', changeOrigin: true }));
app.use('/reviewsShop', createProxyMiddleware({ target: 'http://localhost:8003', changeOrigin: true }));

//Seller
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8004', changeOrigin: true }));

//Related
app.use('/related', createProxyMiddleware({ target: 'http://localhost:8005', changeOrigin: true }));

app.listen(3000);