const program = require("commander");
const product = require("../commands/product");
const Request = require("../commands/request");

// GET all
program
  .command("list")
  .description("List Active Products")
  .option("-a, --all", "Include any archived products")
  .action((cmd) => product.getProducts(cmd));

// GET
program
  .command("show")
  .description("Show an product")
  .option("-i, --id <product ID>", "Enter product ID")
  .option("--tree", "Switch to show hierarchy")
  .action((cmd) => product.getProduct(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an product")
  .option("-i, --id <product ID>", "Enter product ID")
  .action((cmd) => product.deleteProduct(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new product")
  .option(
    "--displayname <value>",
    "Enter product display name e.g. 'My product X'"
  )
  .option("--code <value>", "Enter product code e.g. my-product-x")
  .option("--orgid <value>", "Enter Organisation ID")
  .option("--platformid <value", "Enter Platform ID")
  .option("--ownerid <value>", "Enter User ID")
  .action((cmd) => product.addProduct(cmd));

// UPDATE
program
  .command("update")
  .description("Update product")
  .option("-i, --id <product ID>", "Enter product ID")
  .option("--code <value>", "Enter product code e.g. my-product-x")
  .option("--displayname <value>", "Enter Organisation ID")
  .option("--platformid <value", "Enter Platform ID")
  .option("--ownerid <value>", "Enter User ID")
  .option("--status <'active' | 'archived'>", "Enter Product Status")
  .option("--budgetYear <value>", "Enter Budget Year")
  .option("--budgetAmount <value>", "Enter Budget Amount")
  .option("--budgetCurrency <value>", "Enter Budget Currency")
  .option("--orgid <value", "Enter the Org ID Product belongs to")
  .action((cmd) => product.updateProduct(cmd));

const commander = require("commander");

function requestCommands() {
  const request = new commander.Command("request");
  request
    .command("list")
    .description("List Requests for Product")
    .option("-i, --id <Product ID>", "Enter Product ID")
    .action((cmd) => product.getProductRequests(cmd));

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
