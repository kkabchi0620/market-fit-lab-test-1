module.exports = {
  apps: [
    {
      name: "vite-app",
      script: "serve",
      args: "-s dist -l tcp://0.0.0.0:3000",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
