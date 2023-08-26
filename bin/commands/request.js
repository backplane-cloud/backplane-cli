const BackplaneAPI = require("../lib/BackplaneAPI");
// const TokenManager = require("../lib/TokenManager");
// const colors = require("colors");

const request = {
  async getRequests(cmd) {
    try {
      // const tokenManager = new TokenManager();
      // const token = tokenManager.getToken();

      const backplane = new BackplaneAPI();
      const requests = await backplane.getRequests(cmd.all, cmd.stringify);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getRequest(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getMyRequests(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getMyRequests();

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async approveRequest(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      console.log(cmd.code);
      const backplane = new BackplaneAPI();
      const requests = await backplane.approveRequest(cmd.id, cmd.code);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteRequest(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const request = await backplane.deleteRequest(cmd.id);
      console.log(request);

      //console.log(`request has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addRequest(cmd) {
    // Check Required options have been provided.

    if (
      (cmd.requestType === undefined) |
      (cmd.requestedForType === undefined) |
      (cmd.requestedForId === undefined)
    ) {
      console.log(
        "Need to provide --requestType  --requestedForType --requestedForID".red
      );
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const data = cmd.appid ? cmd.appid : cmd.budget;
      const request = await backplane.addRequest(
        cmd.requestType, //applink, productbudget, platformbudget
        cmd.requestedForType,
        cmd.requestedForId,
        data
      );

      //console.log(`request ${request.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateRequest(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateRequest(
        cmd.id,
        cmd.requestType,
        cmd.approvalStatus,
        cmd.approvalCode,
        cmd.approver,
        cmd.requestedBy,
        cmd.requestedForType,
        cmd.requestedForId
      );

      //console.log(`request ${request.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async rejectRequest(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    const approvalStatus = "rejected";
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateRequest(cmd.id, approvalStatus);

      //console.log(`request ${request.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = request;
