const BackplaneAPI = require("../lib/BackplaneAPI");
const TokenManager = require("../lib/TokenManager");
const colors = require("colors");

const service = {
  async getServices(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const services = await backplane.getServices(cmd.stringify);
      console.log(services);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getService(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing service ID, use --id <service id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const services = await backplane.getService(cmd.id);

      console.log(services);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteService(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing service ID, use --id <service id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const service = await backplane.deleteService(cmd.id);
      console.log(service);

      console.log(`service has been successfully deleted`);

      //   console.log("Login Successful");
      // // Note - Need to put the token in local conf and supply it in query string. Update backplane api auth to handle JWT in HTTP only cookie OR, JWT in body/query string for CLI.
      // const tokenManager = new TokenManager();
      // const token = tokenManager.setToken(token);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addService(cmd) {
    // Check Required options have been provided.

    // if (
    //   (cmd.serviceType === undefined) |
    //   (cmd.serviceedBy === undefined) |
    //   (cmd.serviceedForType === undefined) |
    //   (cmd.serviceedForId === undefined)
    // ) {
    //   console.log(
    //     "Need to provide --serviceType --serviceedBy --serviceedForType --serviceedForID"
    //       .red
    //   );
    //   return;
    // }

    try {
      const backplane = new BackplaneAPI();

      const service = await backplane.addService(
        cmd.code,
        cmd.displayname,
        cmd.description,
        cmd.url,
        cmd.apikey,
        cmd.orgid,
        cmd.ownerid
      );

      //console.log(`service ${service.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateService(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateService(
        cmd.code,
        cmd.displayname,
        cmd.description,
        cmd.url,
        cmd.apikey,
        cmd.orgid,
        cmd.ownerid
      );

      //console.log(`service ${service.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = service;
