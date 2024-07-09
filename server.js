// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Proxy configuration for /github
  server.use(
    "/github",
    createProxyMiddleware({
      target: "https://github.com",
      changeOrigin: true,
      pathRewrite: {
        "^/github": "",
      },
    })
  );

  // Proxy configuration for /leetcode
  server.use(
    "/leetcode",
    createProxyMiddleware({
      target: "https://leetcode.com/graphql/",
      changeOrigin: true,
      pathRewrite: {
        "^/leetcode": "",
      },
    })
  );

  // Handle all other routes with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
