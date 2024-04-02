const program = require("commander");
const platform = require("./commands/platform");
const Request = require("./commands/request");

// GET all
program
  .command("list")
  .description("List platforms")
  .option("-s, --stringify", "Return as JSON string")
  .action(platform.getPlatforms);

// GET
program
  .command("show")
  .description("Show an platform")
  .option("-i, --id <platform ID>", "Enter platform ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) =>
    cmd.tree ? platform.showTree(cmd) : platform.getPlatform(cmd)
  );

// DELETE
program
  .command("remove")
  .description("Remove an platform")
  .option("-i, --id <platform ID>", "Enter platform ID")
  .action((cmd) => platform.deletePlatform(cmd));

// CREATE
program
  .command("create")
  .description("Creates a new platform")
  .option(
    "--displayname <value>",
    "Enter platform display name e.g. 'My platform X'"
  )
  //.option("--code <value>", "Enter platform code e.g. my-platform-x")
  // .option("--orgid <value>", "Enter Organisation ID")
  // .option("--ownerid <value>", "Enter User ID")
  .action((cmd) => platform.addPlatform(cmd));

// Update
program
  .command("update")
  .description("Update platform")
  .option("-i, --id <platform ID>", "Enter platform ID")
  .option("--displayname <value>", "Enter platform name e.g. 'My platform X'")
  .option("--code <value>", "Enter platform code e.g. my-platform-x")
  .option("--orgid <value>", "Enter Org ID")
  .option("--ownerid <value>", "Enter User ID")
  .option("--status <'active' | 'archived'>", "Enter Platform Status")
  .option("--budgetYear <value>", "Enter Budget Year")
  .option("--budgetAmount <value>", "Enter Budget Amount")
  .option("--budgetCurrency <value>", "Enter Budget Currency")
  .action((cmd) => platform.updatePlatform(cmd));

const commander = require("commander");

function requestCommands() {
  const request = new commander.Command("request");
  request
    .command("list")
    .description("List Requests for Platform")
    .option("-i, --id <Team ID>", "Enter Platform ID")
    .action((cmd) => platform.getPlatformRequest(cmd));

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
    .description("Creates a new Request for Platform")
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
