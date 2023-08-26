const Configstore = require("configstore");
// const colors = require("colors");

const pkg = require("../../package.json"); //assert { type: "json" };

class TokenManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
    //console.log(this.conf);
  }

  setToken(token, orgid) {
    this.conf.set("token", token);
    //this.conf.set("orgid", orgid);
    return token;
  }

  getToken() {
    const token = this.conf.get("token");
    // if (!token) {
    //   throw new Error(
    //     "No token found. Please authenticate. \nExample: 'bp auth login --email=<email> --password=<password>'"
    //   );
    // }
    return token;
  }

  deleteToken() {
    const token = this.conf.get("token");
    if (!token) {
      throw new Error("No token found!");
    }
    this.conf.delete("token");
    return;
  }
}

module.exports = TokenManager;
