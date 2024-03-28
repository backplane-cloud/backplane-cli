const BackplaneAPI = require("../lib/BackplaneAPI");
const colors = require("colors");

const app = {
  async getApps(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const apps = await backplane.getApps(cmd.stringify);

      console.log(apps);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getApp(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing App ID, use --id <app id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const apps = await backplane.getApp(cmd.id, cmd.stringify);

      console.log(apps);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteApp(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing App ID, use --id <app id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const app = await backplane.deleteApp(cmd.id);
      console.log(app);

      console.log(`App has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addApp(cmd) {
    // Check Required options have been provided.

    if ((cmd.displayname === undefined) | (cmd.cloud === undefined)) {
      console.log(
        "Need to provide --displayname, --cloud < gcp | azure | aws >".red
      );
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const app = await backplane.addApp(
        cmd.code,
        cmd.displayname,
        cmd.orgid,
        cmd.ownerid,
        cmd.cloud,
        cmd.template
      );
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateApp(cmd) {
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

      await backplane.updateApp(
        cmd.id,
        cmd.code,
        cmd.displayname,
        cmd.orgid,
        cmd.productid,
        cmd.ownerid,
        cmd.cloud,
        cmd.status,
        budget
      );

      //console.log(`App ${app.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getAppBilling(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing App ID, use --id <app id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const apps = await backplane.getAppBilling(cmd.id);

      console.log(apps);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getAppRequests(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getAppRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getAppAccess(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing App ID, use --id <AppID>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const access = await backplane.getAppAccess(cmd.id, cmd.stringify);

      console.log(access);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async getAppPolicies(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing App ID, use --id <AppID>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const policies = await backplane.getAppPolicies(cmd.id, cmd.stringify);

      console.log(policies);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = app;
