const BackplaneAPI = require("../lib/BackplaneAPI");
const TokenManager = require("../lib/TokenManager");
const colors = require("colors");

const access = {
  async getCloudAccess(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const Access = await backplane.getCloudAccess(cmd.appid, cmd.stringify);

      console.log(Access);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = access;
