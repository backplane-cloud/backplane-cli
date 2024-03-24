const program = require("commander");
const org = require("./commands/org");

// UPDATE
program
  .command("add")
  .description("Add Cloud Service Provider")
  .requiredOption("-i, --id <Org ID>", "Enter Org ID")
  .requiredOption(
    "--provider <value>",
    "Enter Cloud Service Provider e.g. azure, gcp or aws"
  )
  .requiredOption("--tenantid <value>", "Enter Tenant ID")
  .requiredOption("--clientid <value>", "Enter Client ID")
  .requiredOption("--clientsecret <value>", "Enter Client Secret")
  .requiredOption("--subscriptionid <value>", "Enter Default Subscription GUID")
  .action((cmd) => org.updateOrg(cmd));

program.parse(process.argv);
