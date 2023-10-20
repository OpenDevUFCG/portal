module.exports = {
  output: "export",
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return config;
  },
};
