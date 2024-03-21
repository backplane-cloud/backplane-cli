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

  setServer(server, orgid) {
    this.conf.set("server", server);

    //this.conf.set("orgid", orgid);
    return server;
  }

  getServer() {
    const server = this.conf.get("server");
    // //this.conf.set("orgid", orgid);
    // console.log("hi", this.conf.get("server"));
    return server;
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
