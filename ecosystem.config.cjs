module.exports = {
  apps: [
    {
      name: "vite-app",
      script: "serve",
      args: "-s dist -l 0.0.0.0:8080",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
