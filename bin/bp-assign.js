const program = require("commander");
const Assign = require("../commands/assign");

// GET all
program
  .command("list")
  .description("List Assignments")
  .action(Assign.getAssignments);

// GET
program
  .command("show")
  .description("Show an Assignment")
  .option("-i, --id <Assignment ID>", "Enter Assignment ID")
  .action((cmd) => Assign.getAssignment(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an Assignment")
  .option("-i, --id <Assign ID>", "Enter Assignment ID")
  .action((cmd) => Assign.deleteAssignment(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Assign")
  .option("--type <value>", "Enter Type i.e user | group")
  .option("--principal <User ID>", "Enter Principal ID of User")
  .option("--scope <value>", "Enter Scope")
  .option("--role <Role ID>", "Enter Role ID")
  .option("--expires <Date>", "Enter Date YYYY-MM--DD")
  .action((cmd) => Assign.addAssignment(cmd));

// UPDATE
program
  .command("update")
  .description("Update Assignment")
  .option("-i, --id <Assign ID>", "Enter Assignment ID")
  .option("--type <value>", "Enter Type i.e user | group")
  .option("--principal <User ID>", "Enter Principal ID of User")
  .option("--scope <value>", "Enter Scope")
  .option("--role <Role ID>", "Enter Role ID")
  .option("--expires <Date>", "Enter Date YYYY-MM--DD")
  .option("--orgid <Org ID>", "Enter Org ID")

  .action((cmd) => Assign.updateAssignment(cmd));

program.parse(process.argv);
