const BackplaneAPI = require("../lib/BackplaneAPI");
// const TokenManager = require("../lib/TokenManager");
// const colors = require("colors");

const backlog = {
  async getBacklogs(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const backlogs = await backplane.getBacklogs(cmd.stringify);
      console.log(backlogs);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async getBacklogSprints(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const backlogSprints = await backplane.getBacklogSprints(cmd.id);
      console.log(backlogSprints);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async getBacklogItems(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const backlogItems = await backplane.getBacklogItems(cmd.id);
      console.log(backlogItems);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getBacklog(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing backlog ID, use --id <backlog id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const backlogs = await backplane.getBacklog(cmd.id);

      console.log(backlogs);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteBacklog(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing backlog ID, use --id <backlog id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const backlog = await backplane.deleteBacklog(cmd.id);
      console.log(backlog);

      console.log(`backlog has been successfully deleted`);

      //   console.log("Login Successful");
      // // Note - Need to put the token in local conf and supply it in query string. Update backplane api auth to handle JWT in HTTP only cookie OR, JWT in body/query string for CLI.
      // const tokenManager = new TokenManager();
      // const token = tokenManager.setToken(token);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addBacklog(cmd) {
    // Check Required options have been provided.

    // if (
    //   (cmd.backlogType === undefined) |
    //   (cmd.backlogedBy === undefined) |
    //   (cmd.backlogedForType === undefined) |
    //   (cmd.backlogedForId === undefined)
    // ) {
    //   console.log(
    //     "Need to provide --backlogType --backlogedBy --backlogedForType --backlogedForID"
    //       .red
    //   );
    //   return;
    // }

    try {
      const backplane = new BackplaneAPI();

      const backlog = await backplane.addBacklog(
        cmd.orgid,
        cmd.productid,
        cmd.ownerid,
        cmd.sprintduration
      );

      //console.log(`backlog ${backlog.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addBacklogSprint(cmd) {
    // Check Required options have been provided.

    // if (
    //   (cmd.backlogType === undefined) |
    //   (cmd.backlogedBy === undefined) |
    //   (cmd.backlogedForType === undefined) |
    //   (cmd.backlogedForId === undefined)
    // ) {
    //   console.log(
    //     "Need to provide --backlogType --backlogedBy --backlogedForType --backlogedForID"
    //       .red
    //   );
    //   return;
    // }

    try {
      const backplane = new BackplaneAPI();

      const backlog = await backplane.addBacklogSprint(
        cmd.orgid,
        cmd.backlogid,
        cmd.productid,
        cmd.ownerid,
        cmd.startdate,
        cmd.enddate,
        cmd.sprintgoal,
        cmd.status,
        cmd.iteration
      );

      //console.log(`backlog ${backlog.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addBacklogItem(cmd) {
    // Check Required options have been provided.

    // if (
    //   (cmd.backlogType === undefined) |
    //   (cmd.backlogedBy === undefined) |
    //   (cmd.backlogedForType === undefined) |
    //   (cmd.backlogedForId === undefined)
    // ) {
    //   console.log(
    //     "Need to provide --backlogType --backlogedBy --backlogedForType --backlogedForID"
    //       .red
    //   );
    //   return;
    // }

    try {
      const backplane = new BackplaneAPI();
      //console.log(cmd);
      //return;
      const backlog = await backplane.addBacklogItem(
        cmd.displayname,
        cmd.description,
        cmd.type,
        cmd.ownerid,
        cmd.assignedto,
        cmd.orgid,
        cmd.status,
        cmd.points,
        cmd.sprint,
        cmd.productid,
        cmd.backlogid
      );

      //console.log(`backlog ${backlog.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateBacklog(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateBacklog(
        cmd.code,
        cmd.displayname,
        cmd.description,
        cmd.url,
        cmd.apikey,
        cmd.orgid,
        cmd.ownerid
      );

      //console.log(`backlog ${backlog.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = backlog;
