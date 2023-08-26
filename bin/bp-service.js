const program = require("commander");
const Service = require("./commands/service");

// GET all
program
  .command("list")
  .description("List Services")
  .option("-s, --stringify", "Return as JSON string")
  .action(Service.getServices);

// GET
program
  .command("show")
  .description("Show a Service")
  .option("-i, --id <Service ID>", "Enter Service ID")
  .action((cmd) => Service.getService(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an Service")
  .option("-i, --id <Service ID>", "Enter Service ID")
  .action((cmd) => Service.deleteService(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Service")
  .option("--code <code>", "Enter Service Code")
  .option("--displayname <name>", "Enter Service Name")
  .option("--description <description>", "Enter Description")
  .option("--url <URL", "Enter API Endpoint for Service")
  .option(
    "--apikey <description",
    "Enter API Key/Token to Authenticate with Service"
  )
  .option("--orgid <orgId>", "Enter Org ID")
  .option("--ownerid <ownerId>", "Enter Owner ID")

  .action((cmd) => Service.addService(cmd));

// UPDATE
program
  .command("update")
  .description("Update Service")
  .option("--code <code>", "Enter Service Code")
  .option("--displayname <name>", "Enter Service Name")
  .option("--description <description>", "Enter Description")
  .option("--url <URL", "Enter API Endpoint for Service")
  .option(
    "--apikey <description",
    "Enter API Key/Token to Authenticate with Service"
  )
  .option("--orgid <orgId>", "Enter Org ID")
  .option("--ownerid <ownerId>", "Enter Owner ID")

  .action((cmd) => Service.updateService(cmd));

program.parse(process.argv);
