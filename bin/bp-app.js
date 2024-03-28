const program = require("commander");
const app = require("./commands/app");
const Request = require("./commands/request");

// GET all
program
  .command("list")
  .description("List apps")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => app.getApps(cmd));

// GET
program
  .command("show")
  .description("Show an app")
  .option("-i, --id <app ID>", "Enter app ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => app.getApp(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an app")
  .option("-i, --id <app ID>", "Enter app ID")
  .action((cmd) => app.deleteApp(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new app")
  .option("--displayname <value>", "Enter app display name e.g. 'My app X'")
  .option("--code <value>", "Enter app code e.g. my-app-x")
  .option("--orgid <value", "Enter Org ID")
  .option("--ownerid <value>", "Enter User ID")
  .option("--cloud <value>", "e.g. gcp | azure | aws")
  .option("--template <App Type>", "e.g. default, saas etc.")
  .action((cmd) => app.addApp(cmd));

// Update
program
  .command("update")
  .description("Update App")
  .option("-i, --id <app ID>", "Enter App ID")
  .option("--code <value>", "Enter App code e.g. my-app-x")
  .option("--displayname <value>", "Enter Displayname")
  .option("--orgid <value", "Enter Org ID")
  .option("--productid <value", "Enter Product ID")
  .option("--ownerid <value>", "Enter User ID")
  .option("--cloud <value>", "e.g. gcp | azure | aws")
  .option("--status <'active' | 'archived>", "Enter Product Status")
  .option("--budgetYear <value>", "Enter Budget Year")
  .option("--budgetAmount <value>", "Enter Budget Amount")
  .option("--budgetCurrency <value>", "Enter Budget Currency")
  .action((cmd) => app.updateApp(cmd));

const commander = require("commander");

function requestCommands() {
  const request = new commander.Command("request");
  request
    .command("list")
    .description("List Requests for App")
    .option("-i, --id <Product ID>", "Enter App ID")
    .action((cmd) => app.getAppRequests(cmd));

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
    .description("Creates a new Request for App")
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

function accessCommands() {
  const access = new commander.Command("access");
  access
    .command("list")
    .description("List Requests for App")
    .option("-i, --id <Product ID>", "Enter App ID")
    .action((cmd) => app.getAppAccess(cmd));

  access
    .command("add")
    .description("Creates a new Request for App")
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
    .action((cmd) => app.addAppAccess(cmd));

  return access;
}

program.addCommand(accessCommands());

program.parse(process.argv);
