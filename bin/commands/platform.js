const BackplaneAPI = require("../lib/BackplaneAPI");
// const TokenManager = require("../lib/TokenManager");
// const colors = require("colors");

const platform = {
  async getPlatforms(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const platforms = await backplane.getPlatforms(cmd.stringify);
      console.log(platforms);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getPlatform(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Platform ID, use --id <platform id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const platforms = await backplane.getPlatform(cmd.id, cmd.stringify);
      console.log(platforms);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deletePlatform(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Platform ID, use --id <platform id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const platform = await backplane.deletePlatform(cmd.id);
      console.log(platform);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addPlatform(cmd) {
    // Check Required options have been provided.

    if (cmd.displayname === undefined) {
      console.log("Need to provide --displayname".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const platform = await backplane.addPlatform(
        cmd.code,
        cmd.displayname,
        cmd.description,
        cmd.orgid,
        cmd.ownerid
      );
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updatePlatform(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const budget = {
        year: cmd.budgetYear,
        budget: cmd.budgetAmount,
        currency: cmd.budgetCurrency,
      };

      await backplane.updatePlatform(
        cmd.id,
        cmd.code,
        cmd.displayname,
        cmd.orgid,
        cmd.ownerid,
        cmd.status,
        budget
      );

      //console.log(`Platform ${platform.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getPlatformRequests(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      // const tokenManager = new TokenManager();
      // const token = tokenManager.getToken();

      const backplane = new BackplaneAPI();
      const requests = await backplane.getPlatformRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getPlatformRequest(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getPlatformRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getPlatformCost(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Platform ID, use --id <PlatformID>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const cost = await backplane.getPlatformCost(cmd.id, cmd.stringify);

      console.log(cost);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getPlatformBudgets(cmd) {
    if ((cmd.id === undefined) & (cmd.code === undefined)) {
      console.log(
        "Please provide either an Platform ID e.g. --id <platform id> or --code <platform code>"
      );
      return;
    }

    try {
      const backplane = new BackplaneAPI();
      const budgets = await backplane.getPlatformBudgets(
        cmd.id ? cmd.id : cmd.code,
        cmd.stringify
      );

      budgets
        ? console.log(budgets)
        : console.log("No Platform Budgets exist for Org");
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = platform;
