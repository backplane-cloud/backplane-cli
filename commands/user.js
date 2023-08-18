const BackplaneAPI = require("../lib/BackplaneAPI");
const colors = require("colors");

const user = {
  async getUsers(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const users = await backplane.getUsers(cmd.stringify);

      console.log(users);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getUser(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing User ID, use --id <user id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const users = await backplane.getUser(cmd.id);

      console.log(users);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteUser(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing User ID, use --id <user id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const user = await backplane.deleteUser(cmd.id);
      console.log(user);

      console.log(`User has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addUser(cmd) {
    // Check Required options have been provided.

    if (
      (cmd.displayname === undefined) |
      (cmd.email === undefined) |
      (cmd.password === undefined)
    ) {
      console.log(
        "Need to provide --code, --displayname, --orgid and --ownerid <owner ID>, --cloud [gcp|azure|aws]"
          .red
      );
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const user = await backplane.addUser(
        cmd.displayname,
        cmd.email,
        cmd.password,
        //cmd.orgid,
        //req.user.orgId,
        cmd.usertype
      );

      //console.log(`User ${user.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async registerUser(cmd) {
    // Check Required options have been provided.

    if (
      (cmd.displayname === undefined) |
      (cmd.email === undefined) |
      (cmd.password === undefined)
    ) {
      console.log("Need to provide --displayname, --email and --password".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const user = await backplane.registerUser(
        cmd.displayname,
        cmd.email,
        cmd.password,
        cmd.usertype,
        cmd.orgname
      );

      //console.log(`User ${user.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateUser(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }

    try {
      const backplane = new BackplaneAPI();

      await backplane.updateUser(
        cmd.id,
        cmd.displayname,
        cmd.orgid,
        cmd.email,
        cmd.password,
        cmd.usertype
      );

      //console.log(`User ${user.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = user;
