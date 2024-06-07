const program = require("commander");
const org = require("./commands/org");

// GET all
program
  .command("list")
  .description("List Budgets for an Org")
  .option("-s, --stringify", "Return as JSON string")
  .option("-i, --id <org ID>", "Enter org ID")

  .action(org.getOrgBudgets);

// The below are not yet implemented

// // GET
// program
//   .command("show")
//   .description("Show a Budget")
//   .option("-i, --id <org ID>", "Enter org ID")
//   .option("-s, --stringify", "Return as JSON string")
//   .action((cmd) => org.getOrgBudget(cmd));

// // DELETE
// program
//   .command("remove")
//   .description("Remove a Budget")
//   .option("-i, --id <org ID>", "Enter org ID")
//   .action((cmd) => org.deleteOrgBudget(cmd));

// CREATE
program
  .command("create")
  .description("Creates a new Budget")
  .option("--year <value>", "Enter Budget Year")
  .option("--amount <value>", "Enter Budget Amount")
  .option("--currency <value>", "Enter Currency")
  .option("--id <value>", "Enter Org ID")
  .action((cmd) => org.addOrgBudget(cmd));

// // Update
// program
//   .command("update")
//   .description("Update OrgBudget")
//   .option("-i, --id <org ID>", "Enter org ID")
//   .option("--displayname <value>", "Enter org name e.g. 'My org X'")
//   .option("--code <value>", "Enter org code e.g. my-org-x")
//   .option("--orgid <value>", "Enter Org ID")
//   .option("--ownerid <value>", "Enter User ID")
//   .option("--status <'active' | 'archived'>", "Enter org Status")
//   .option("--budgetYear <value>", "Enter Budget Year")
//   .option("--budgetAmount <value>", "Enter Budget Amount")
//   .option("--budgetCurrency <value>", "Enter Budget Currency")
//   .action((cmd) => org.updateorg(cmd));

program.parse(process.argv);
