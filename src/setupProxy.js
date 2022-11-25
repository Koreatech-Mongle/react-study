const {createProxyMiddleware} = require('http-proxy-middleware');
const backendPaths = ['/member'];

module.exports = function (app) {
    backendPaths.forEach(path => {
        app.use(
            createProxyMiddleware(path, {
                target: 'http://localhost:3001',
                changeOrigin: true
            })
        )
    });
};