const program = require("commander");
const org = require("./commands/org");

// GET all
program
  .command("list")
  .description("List App Environment Templates for Org")
  .option("-s, --stringify", "Return as JSON string")
  .option("-i, --id <org ID>", "Enter org ID")

  .action(org.getOrgTemplates);

// The below are not yet implemented

// GET
program
  .command("show")
  .description("Show a Template")
  .option("-i, --id <org ID>", "Enter org ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => org.getOrgTemplate(cmd));

// DELETE
program
  .command("remove")
  .description("Remove a Template")
  .option("-i, --id <org ID>", "Enter org ID")
  .action((cmd) => org.deleteOrgTemplate(cmd));

// CREATE
program
  .command("create")
  .description("Creates a new Template")
  .option("--displayname <value>", "Enter org display name e.g. 'My org X'")
  //.option("--code <value>", "Enter org code e.g. my-org-x")
  // .option("--orgid <value>", "Enter Organisation ID")
  // .option("--ownerid <value>", "Enter User ID")
  .action((cmd) => org.addOrgTemplate(cmd));

// Update
program
  .command("update")
  .description("Update OrgTemplate")
  .option("-i, --id <org ID>", "Enter org ID")
  .option("--displayname <value>", "Enter org name e.g. 'My org X'")
  .option("--code <value>", "Enter org code e.g. my-org-x")
  .option("--orgid <value>", "Enter Org ID")
  .option("--ownerid <value>", "Enter User ID")
  .option("--status <'active' | 'archived'>", "Enter org Status")
  .option("--budgetYear <value>", "Enter Budget Year")
  .option("--budgetAmount <value>", "Enter Budget Amount")
  .option("--budgetCurrency <value>", "Enter Budget Currency")
  .action((cmd) => org.updateorg(cmd));

program.parse(process.argv);
