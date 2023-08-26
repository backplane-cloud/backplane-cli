const inquirer = require("inquirer");
// const colors = require("colors");
const TokenManager = require("../lib/TokenManager");
const { isRequired } = require("../utils/validation");

const token = {
  async set() {
    const tokenManager = new TokenManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "token",
        message: "Enter Token".green + "https://login.backplane.cloud",
        validate: isRequired,
      },
    ]);

    const token = tokenManager.setToken(input.token);

    if (token) {
      console.log("Token Set".blue);
    }
  },
  show() {
    try {
      const tokenManager = new TokenManager();
      const token = tokenManager.getToken();
      console.log("token: ", token.yellow);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const tokenManager = new TokenManager();
      tokenManager.deleteToken();
      console.log("Token has been removed".blue);
      return;
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = token;
