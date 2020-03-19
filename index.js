const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT;

server.get("/", (req, res) => {
  console.log("this is homepage");
});

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  res.status(200).send("Selamlar");
});

// CI/CD pipeline stages:
// - development
// - test
// - staging
// - --- manuel gate
// - production
