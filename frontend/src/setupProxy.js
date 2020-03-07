const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
  app.use(
    "/register",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );

  app.use(
    "/logout",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
  app.use(
    "/current_user",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );

};
