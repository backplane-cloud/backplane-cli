const program = require("commander");
const policy = require("./commands/policy");

// GET all
program
  .command("list")
  .description("List Policies")
  .option("-a, --appid <App ID>", "Provide App ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => policy.getCloudPolicy(cmd));

// // GET
// program
//   .command("show")
//   .description("Show an Accessment")
//   .option("-i, --id <Accessment ID>", "Enter Accessment ID")
//   .action((cmd) => Access.getAccessment(cmd));

// // DELETE
// program
//   .command("remove")
//   .description("Remove an Accessment")
//   .option("-i, --id <Access ID>", "Enter Accessment ID")
//   .action((cmd) => Access.deleteAccessment(cmd));

// // CREATE
// program
//   .command("add")
//   .description("Creates a new Access")
//   .option("--type <value>", "Enter Type i.e user | group")
//   .option("--principal <User ID>", "Enter Principal ID of User")
//   .option("--scope <value>", "Enter Scope")
//   .option("--role <Role ID>", "Enter Role ID")
//   .option("--expires <Date>", "Enter Date YYYY-MM--DD")
//   .action((cmd) => Access.addAccessment(cmd));

// // UPDATE
// program
//   .command("update")
//   .description("Update Accessment")
//   .option("-i, --id <Access ID>", "Enter Accessment ID")
//   .option("--type <value>", "Enter Type i.e user | group")
//   .option("--principal <User ID>", "Enter Principal ID of User")
//   .option("--scope <value>", "Enter Scope")
//   .option("--role <Role ID>", "Enter Role ID")
//   .option("--expires <Date>", "Enter Date YYYY-MM--DD")
//   .option("--orgid <Org ID>", "Enter Org ID")

//   .action((cmd) => Access.updateAccessment(cmd));

program.parse(process.argv);
