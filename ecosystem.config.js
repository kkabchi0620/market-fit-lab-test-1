module.exports = {
  apps: [
    {
      name: "myapp-server",
      script: "./server/server.js",
      watch: false,
    },
    {
      name: "myapp-client",
      script: "npm run start",
      cwd: "./client",
      watch: false
    },
  ],
};
