const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/")
    };

    return config;
  },
};
