const BackplaneAPI = require("../lib/BackplaneAPI");
const TokenManager = require("../lib/TokenManager");
const colors = require("colors");

const policy = {
  async getCloudPolicy(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const Policy = await backplane.getCloudPolicy(cmd.appid, cmd.stringify);

      console.log(Policy);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = policy;
