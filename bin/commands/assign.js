const BackplaneAPI = require("../lib/BackplaneAPI");
// const TokenManager = require("../lib/TokenManager");
// const colors = require("colors");

const assign = {
  async getAssignments(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const assignments = await backplane.getAssignments(cmd.stringify);

      console.log(assignments);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getAssignment(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing assign ID, use --id <assign id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const assignment = await backplane.getAssignment(cmd.id);

      console.log(assignment);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteAssignment(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing assign ID, use --id <assign id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const assignment = await backplane.deleteAssignment(cmd.id);
      console.log(assignment);

      console.log(`assign has been successfully deleted`);

      //   console.log("Login Successful");
      // // Note - Need to put the token in local conf and supply it in query string. Update backplane api auth to handle JWT in HTTP only cookie OR, JWT in body/query string for CLI.
      // const tokenManager = new TokenManager();
      // const token = tokenManager.setToken(token);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addAssignment(cmd) {
    // Check Required options have been provided.

    // if (
    //   (cmd.assignType === undefined) |
    //   (cmd.assignedBy === undefined) |
    //   (cmd.assignedForType === undefined) |
    //   (cmd.assignedForId === undefined)
    // ) {
    //   console.log(
    //     "Need to provide --assignType --assignedBy --assignedForType --assignedForID"
    //       .red
    //   );
    //   return;
    // }

    try {
      const backplane = new BackplaneAPI();

      const assign = await backplane.addAssignment(
        cmd.type,
        cmd.principal,
        cmd.scope,
        cmd.role,
        cmd.expires
      );

      //console.log(`assign ${assign.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateAssignment(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      await backplane.updateAssignment(
        cmd.id,
        cmd.type,
        cmd.principal,
        cmd.scope,
        cmd.role,
        cmd.expires,
        cmd.orgid
      );

      //console.log(`assign ${assign.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = assign;
