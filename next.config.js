// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/github/:path*",
        destination: "https://github.com/:path*", // Proxy to Backend
      },
      {
        source: "/leetcode/:path*",
        destination: "https://leetcode.com/graphql/:path*", // Proxy to Backend
      },
    ];
  },
};
