const program = require("commander");
const role = require("../commands/role");

const commander = require("commander");

function actionCommands() {
  const action = new commander.Command("action");
  action
    .command("list")
    .description("List actions of a role")
    .option("-i, --id <role ID>", "Enter role ID")
    .action((cmd) => role.listActions(cmd));

  action
    .command("add")
    .description("Add actions to a role")
    .option("-i, --id <role ID>", "Enter role ID")
    .option("-a, --actions <role ID>", "Enter Actions e.g. /read")
    .action((cmd) => role.addActions(cmd));

  action
    .command("remove")
    .description("Remove actions from a role")
    .option("-i, --id <role ID>", "Enter role ID")
    .option("-a, --actions <Role ID>", "Enter Actions to remove")
    .action((cmd) => role.removeActions(cmd));

  return action;
}

// GET all
program.command("list").description("List roles").action(role.getRoles);

// GET
program
  .command("show")
  .description("Show a role")
  .option("-i, --id <role ID>", "Enter role ID")
  .action((cmd) => role.getRole(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an role")
  .option("-i, --id <role ID>", "Enter role ID")
  .action((cmd) => role.deleteRole(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new role")
  .option("--displayname <value>", "Enter Display Name for role")
  .option("--type <value>", "builtin or custom")
  .option("--actions <User ID>", "Enter role Scope")
  .option("--orgid <Org ID", "Enter Org ID for role")
  .action((cmd) => role.addRole(cmd));

// UPDATE
program
  .command("update")
  .description("Update role")
  .option("--id <role ID>", "Enter role ID")
  .option("--displayname <random number>", "Enter Display Name for role")
  .option("--code <User ID>", "Enter role Code")
  .option("--scope <User ID>", "Enter role Scope")
  .option("--ownerid <User ID", "Enter Owner ID for role")
  .option("--actions <value>", "Enter actions")

  .action((cmd) => role.updateRole(cmd));

program.addCommand(actionCommands());

program.parse(process.argv);
