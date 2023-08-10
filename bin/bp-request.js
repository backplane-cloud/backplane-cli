const program = require("commander");
const Request = require("../commands/request");

// GET all
program
  .command("list")
  .description("List Requests")
  .action(Request.getRequests);

// GET
program
  .command("show")
  .description("Show an Request")
  .option("-i, --id <Request ID>", "Enter Request ID")
  .action((cmd) => Request.getRequest(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an Request")
  .option("-i, --id <Request ID>", "Enter Request ID")
  .action((cmd) => Request.deleteRequest(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Request")
  //.option("-i, --id <Request ID>", "Enter Request ID")
  .option(
    "--requestType <'applink' | 'exemption' | 'budget'>",
    "Enter Request Type"
  )
  .option(
    "--approvalStatus <'approved', 'requested','rejected'>",
    "Enter Approval Status"
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

// UPDATE
program
  .command("update")
  .description("Update Request")
  .option("-i, --id <Request ID>", "Enter Request ID")
  .option(
    "--requestType <'applink' | 'exemption' | 'budget'>",
    "Enter Request Type"
  )
  .option(
    "--approvalStatus <'approved', 'requested','rejected'>",
    "Enter Approval Status"
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

  .action((cmd) => Request.updateRequest(cmd));

program.parse(process.argv);
