module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({ // Make svg images work well
      test: /\.svg$/i,
      issuer: { and: [/\.(ts)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: { plugins: [{ removeViewBox: false }] },
          },
        },
      ],
    });

    return config;
  },
};