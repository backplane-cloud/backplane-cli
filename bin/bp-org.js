const program = require("commander");
const org = require("./commands/org");
const Request = require("./commands/request");

// GET all
program
  .command("list")
  .description("List Orgs")
  .option("-s, --stringify", "Return as JSON string")
  .action(org.getOrgs);

// GET
program
  .command("show")
  .description("Show an Org")
  .option("-i, --id <Org ID>", "Enter Org ID")
  .option("--code <Org Code", "Enter Org Code")
  .option("--tree", "Switch to show hierarchy")
  .option("-f, --full", "includes ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => (cmd.tree ? org.showTree(cmd) : org.getOrg(cmd)));

// DELETE
program
  .command("remove")
  .description("Remove an Org")
  .option("-i, --id <Org ID>", "Enter Org ID")
  .action((cmd) => org.deleteOrg(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Org")
  .option("--displayname <value>", "Enter Org name e.g. 'My Org X'")
  .option("--code <value>", "Enter Org code e.g. my-org-x")
  .option("--license <value>", "e.g. Enterprise or Community Edition")
  .option("--owner <value>", "Enter User ID")
  .option("--budget <value>", "Enter Org Budget")
  .option("--currency <value>", "Enter Org Currency")
  .action((cmd) => org.addOrg(cmd));

// UPDATE
program
  .command("update")
  .description("Update Org")
  .option("-i, --id <Org ID>", "Enter Org ID")
  .option("--displayname <value>", "Enter Org name e.g. 'My Org X'")
  .option("--code <value>", "Enter Org code e.g. my-org-x")
  .option("--license <value>", "e.g. Enterprise or Community Edition")
  .option("--owner <value>", "Enter User ID")
  .option("--status <'active'|'archived'", "Enter Org Status")
  .option("--budgetYear <value>", "Enter Budget Year")
  .option("--budgetAmount <value>", "Enter Budget Amount")
  .option("--budgetCurrency <value>", "Enter Budget Currency")
  .option(
    "--provider <value>",
    "Enter Cloud Service Provider e.g. azure, gcp or aws"
  )
  .option("--tenantid <value>", "Enter Tenant ID")
  .option("--clientid <value>", "Enter Client ID")
  .option("--clientsecret <value>", "Enter Client Secret")
  .action((cmd) => org.updateOrg(cmd));

const commander = require("commander");

function requestCommands() {
  const request = new commander.Command("request");
  request
    .command("list")
    .description("List Requests for Org")
    .option("-i, --id <Org ID>", "Enter Org ID (Root user only)")
    .action((cmd) => org.getOrgRequest(cmd));

  request
    .command("approve")
    .description("Approve a Request")
    .option("-i, --id <Request ID>", "Enter Request ID")
    .action((cmd) => Request.approveRequest(cmd));

  request
    .command("reject")
    .description("Reject a Request")
    .option("-i, --id <Request ID>", "Enter Request ID")
    .action((cmd) => Request.rejectRequest(cmd));

  request
    .command("add")
    .description("Creates a new Request for Org")
    .option(
      "--requestType <'applink' | 'exemption' | 'budget'>",
      "Enter Request Type"
    )
    .option("--approvalCode <random number>", "Enter Approval Code")
    .option("--approver <User ID>", "Enter Approver")
    .option("--requestedBy <User ID>", "Enter User ID")
    .option(
      "--requestedForType <'org' | 'platform' | 'product'>",
      "Enter Requested For Type"
    )
    .option(
      "--requestedForId <Org, Platform, Product or App ID>",
      "Enter Requested For ID"
    )
    .action((cmd) => Request.addRequest(cmd));

  return request;
}

program.addCommand(requestCommands());

program.parse(process.argv);
