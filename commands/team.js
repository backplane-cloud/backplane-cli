const BackplaneAPI = require("../lib/BackplaneAPI");
const colors = require("colors");

const team = {
  async getTeams(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const teams = await backplane.getTeams(cmd.stringify);

      console.log(teams);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getTeam(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const teams = await backplane.getTeam(cmd.id);

      console.log(teams);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async isMember(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const teams = await backplane.isMember(cmd.id, cmd.userid);

      console.log(teams);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async listMembers(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const members = await backplane.listMembers(cmd.id);

      console.log(members);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addMembers(cmd) {
    console.log(typeof cmd.userid);
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const members = await backplane.addMembers(cmd.id, cmd.userid);

      console.log(members);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async removeMembers(cmd) {
    console.log(typeof cmd.userid);
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const members = await backplane.removeMembers(cmd.id, cmd.userid);

      console.log(members);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async listOwners(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const owners = await backplane.listOwners(cmd.id);

      console.log(owners);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async addOwners(cmd) {
    console.log(typeof cmd.userid);
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const owners = await backplane.addOwners(cmd.id, cmd.userid);

      console.log(owners);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async removeOwners(cmd) {
    console.log(typeof cmd.userid);
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const owners = await backplane.removeOwners(cmd.id, cmd.userid);

      console.log(owners);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteTeam(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing team ID, use --id <team id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const team = await backplane.deleteTeam(cmd.id);
      console.log(team);

      console.log(`team has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addTeam(cmd) {
    // Check Required options have been provided.

    if (
      (cmd.displayname === undefined) |
      (cmd.code === undefined) |
      (cmd.scope === undefined)
    ) {
      console.log("Need to provide --displayname --code --scope --ownerid".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const team = await backplane.addTeam(
        cmd.displayname,
        cmd.code,
        cmd.ownerid,
        cmd.scope
      );
      console.log(team);
      //console.log(`team ${team.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateTeam(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateTeam(
        cmd.id,
        cmd.displayname,
        cmd.code,
        cmd.owners,
        cmd.scope,
        cmd.orgid
      );

      //console.log(`team ${team.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = team;
