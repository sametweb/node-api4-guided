const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// CI/CD pipeline stages:
// - development
// - test
// - staging
// - --- manuel gate
// - production
