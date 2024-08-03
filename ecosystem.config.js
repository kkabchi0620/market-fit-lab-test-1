module.exports = {
  apps: [
    {
      name: "vite-app",
      script: "serve",
      args: "-s dist",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
