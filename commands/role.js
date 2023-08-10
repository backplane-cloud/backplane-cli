const BackplaneAPI = require("../lib/BackplaneAPI");
const colors = require("colors");

const role = {
  async getRoles() {
    try {
      const backplane = new BackplaneAPI();
      const roles = await backplane.getRoles();

      console.log(roles);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getRole(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing role ID, use --id <role id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const roles = await backplane.getRole(cmd.id);

      console.log(roles);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async listActions(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing role ID, use --id <role id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const actions = await backplane.listActions(cmd.id);

      console.log(actions);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addActions(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing role ID, use --id <role id>".red);
      return;
    }
    console.log("cmd.actions:", cmd.actions);
    try {
      const backplane = new BackplaneAPI();
      const actions = await backplane.addActions(cmd.id, cmd.actions);

      console.log(actions);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async removeActions(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing role ID, use --id <role id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const actions = await backplane.removeActions(cmd.id, cmd.actions);

      console.log(actions);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteRole(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing role ID, use --id <role id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const role = await backplane.deleteRole(cmd.id);
      console.log(role);

      console.log(`role has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addRole(cmd) {
    // Check Required options have been provided.

    if (
      (cmd.displayname === undefined) |
      (cmd.type === undefined) |
      (cmd.actions === undefined)
    ) {
      console.log("Need to provide --displayname --type --actions --orgid".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const role = await backplane.addRole(
        cmd.displayname,
        cmd.type,
        cmd.actions
      );

      //console.log(`role ${role.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateRole(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateRole(
        cmd.id,
        cmd.displayname,
        cmd.code,
        cmd.owners,
        cmd.scope,
        cmd.actions
      );

      //console.log(`role ${role.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = role;
