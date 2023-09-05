const BackplaneAPI = require("../lib/BackplaneAPI");
const TokenManager = require("../lib/TokenManager");

// const backplaneAPI = new BackplaneAPI();

const auth = {
  async login(cmd) {
    if (cmd.password === undefined || cmd.email === undefined) {
      console.log(
        "Missing email/password, use --email <email> --password <password>"
      );
      return;
    }

    try {
      const backplane = new BackplaneAPI();
      const authenticate = await backplane.login(cmd.email, cmd.password);

      //console.log("auth:", authenticate);

      // Store JWT token in Token Manager
      const tokenManager = new TokenManager();
      tokenManager.setToken(authenticate.token);

      console.log("Login Successful");
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async logout() {
    try {
      const tokenManager = new TokenManager();
      tokenManager.deleteToken();
      console.log("Token has been removed".blue);
      // const backplane = new BackplaneAPI();
      // await backplane.logout();
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async me() {
    try {
      const backplane = new BackplaneAPI();
      const authenticate = await backplane.me();
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = auth;
