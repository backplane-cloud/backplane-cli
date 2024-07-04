const program = require("commander");
const org = require("./commands/org");

// // UPDATE
// program
//   .command("add")
//   .description("Add Cloud Service Provider")
//   .requiredOption("-i, --id <Org ID>", "Enter Org ID")
//   .requiredOption(
//     "--provider <value>",
//     "Enter Cloud Service Provider e.g. azure, gcp or aws"
//   )
//   .requiredOption("--tenantid <value>", "Enter Tenant ID")
//   .requiredOption("--clientid <value>", "Enter Client ID")
//   .requiredOption("--clientsecret <value>", "Enter Client Secret")
//   .requiredOption("--subscriptionid <value>", "Enter Default Subscription GUID")
//   .option("--gcpsecret <value>", "Enter Path to JSON Credentials")
//   .action((cmd) => org.updateOrg(cmd));

// // LIST
// program
//   .command("list")
//   .description("List Cloud Service Provider")
//   .requiredOption("-i, --id <Org ID>", "Enter Org ID")

//   .action((cmd) => org.getOrgCSP(cmd));

const commander = require("commander");

function azureCommands() {
  const azure = new commander.Command("azure");
  azure
    .command("show")
    .description("Show Cloud Service Provider Credentials")
    .option("-i, --id <Org ID>", "Enter Org ID")
    .action((cmd) => org.getOrgCSP(cmd));

  azure
    .command("add")
    .description("Add Cloud Service Provider")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    .requiredOption("--tenantid <value>", "Enter Tenant ID")
    .requiredOption("--clientid <value>", "Enter Client ID")
    .requiredOption("--clientsecret <value>", "Enter Client Secret")
    .requiredOption(
      "--subscriptionid <value>",
      "Enter Default Subscription GUID"
    )
    .action((cmd) => org.updateOrgCSP(cmd));

  return azure;
}

program.addCommand(azureCommands());

function gcpCommands() {
  const gcp = new commander.Command("gcp");
  gcp

    .command("show")
    .description("Show Cloud Service Provider Credentials")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")

    .action((cmd) => org.getOrgCSP(cmd));

  gcp

    .command("add")
    .description("Add Cloud Service Provider")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    .requiredOption("--tenantid <value>", "Enter Tenant ID")
    .option("--gcpsecret <value>", "Enter Path to JSON Credentials")
    .action((cmd) => org.updateOrgCSP(cmd));

  return gcp;
}

program.addCommand(gcpCommands());

function ociCommands() {
  const oci = new commander.Command("oci");
  oci
    .command("show")
    .description("Show Cloud Service Provider Credentials")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    .action((cmd) => org.getOrgCSP(cmd));
  oci
    .command("add")
    .description("Add Cloud Service Provider")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    // .requiredOption("--tenantid <value>", "Enter Tenant ID")
    .option("--ocisecret <value>", "Enter Path to JSON Credentials")
    .action((cmd) => org.updateOrgCSP(cmd));

  return oci;
}

program.addCommand(ociCommands());

function awsCommands() {
  const aws = new commander.Command("aws");
  aws
    .command("show")
    .description("Show Cloud Service Provider Credentials")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    .action((cmd) => org.getOrgCSP(cmd));

  aws
    .command("add")
    .description("Add Cloud Service Provider")
    .requiredOption("-i, --id <Org ID>", "Enter Org ID")
    .requiredOption("--clientid <value>", "Access Key ID")
    .option("--clientsecret <value>", "Secret Access Key")
    .action((cmd) => org.updateOrgCSP(cmd));

  return aws;
}

program.addCommand(awsCommands());

program.parse(process.argv);
