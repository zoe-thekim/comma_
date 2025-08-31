const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    console.log('[setupProxy] loaded');
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            logLevel: 'debug',
        }));
};
