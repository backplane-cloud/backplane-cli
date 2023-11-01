const program = require("commander");
const Backlog = require("./commands/backlog");

// GET all
program
  .command("list")
  .description("List Backlogs")
  .option("-s, --stringify", "Return as JSON string")
  .action(Backlog.getBacklogs);

// GET
program
  .command("show")
  .description("Show a Backlog")
  .option("-i, --id <Backlog ID>", "Enter Backlog ID")
  .action((cmd) => Backlog.getBacklog(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an Backlog")
  .option("-i, --id <Backlog ID>", "Enter Backlog ID")
  .action((cmd) => Backlog.deleteBacklog(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Backlog")
  .option("--orgid <name>", "Enter Backlog Name")
  .option("--productid <productID>", "Enter Product ID")
  .option("--ownerid <ownerId>", "Enter Owner ID")
  .option(
    "--sprintduration <sprintduration>",
    "Sprint Duration in days e.g. 7, 14 etc"
  )
  .action((cmd) => Backlog.addBacklog(cmd));

// UPDATE
program
  .command("update")
  .description("Update Backlog")
  .option("--code <code>", "Enter Backlog Code")
  .option("--displayname <name>", "Enter Backlog Name")
  .option("--description <description>", "Enter Description")
  .option("--url <URL", "Enter API Endpoint for Backlog")
  .option(
    "--apikey <description",
    "Enter API Key/Token to Authenticate with Backlog"
  )
  .option("--orgid <orgId>", "Enter Org ID")
  .option("--ownerid <ownerId>", "Enter Owner ID")

  .action((cmd) => Backlog.updateBacklog(cmd));

const commander = require("commander");

function sprintCommands() {
  const sprint = new commander.Command("sprint");
  sprint
    .command("list")
    .description("List sprints for Backlog")
    .option("-i, --id <Backlog ID>", "Enter Backlog ID")
    .action((cmd) => Backlog.getBacklogSprints(cmd));

  sprint
    .command("add")
    .description("Creates a new Sprint for Backlog")
    .option("--orgid <Org ID", "Enter Org ID")
    .option("--backlogid <Backlog ID", "Enter Backlog ID")
    .option("--productid <Product ID>", "Enter Product ID")
    .option("--ownerid <User ID>", "Enter Owner ID")
    .option("--startdate <Start Date>", "Enter Start Date")
    .option("--enddate <End Date>", "Enter End Date")
    .option("--sprintgoal <Sprint Goal>", "Enter Sprint Goal")
    .option("--status <started, new, complete>", "Enter Sprint Status")
    .option("--iteration <1,2,3>", "Enter Sprint Iteration")
    .action((cmd) => Backlog.addBacklogSprint(cmd));

  return sprint;
}
function itemCommands() {
  const item = new commander.Command("item");
  item
    .command("list")
    .description("List Backlog Items for Backlog")
    .option("-i, --id <Backlog ID>", "Enter Backlog ID")
    .option(
      "-t, --type <Backlog Type",
      "Valid values: epic, feature, userstory, bug"
    )
    .action((cmd) => Backlog.getBacklogItems(cmd));
  item
    .command("show")
    .description("Show a Backlog Item")
    .option("-i, --id <Backlog Item ID>", "Enter Backlog Item ID")
    .action((cmd) => Backlog.getBacklogItem(cmd));

  item
    .command("add")
    .description("Creates a new Backlog Item for Backlog")
    .option("--orgid <Org ID", "Enter Org ID")
    .option("--backlogid <Backlog ID", "Enter Backlog ID")
    .option("--productid <Product ID>", "Enter Product ID")
    .option("--ownerid <User ID>", "Enter Owner ID")
    .option("--displayname <Name>", "Enter Item Name")
    .option("--description <Description>", "Enter Item Description")
    .option("--type <epic | feature | userstory | bug>", "Enter Sprint Goal")
    .option("--assignedto <User ID>", "Enter User ID")
    .option("--sprint <1,2,3>", "Enter Sprint Iteration")
    .option("--status <1,2,3>", "Enter Item Status")
    .option("--points <1,2,3>", "Enter Points if Type is User Story")
    .action((cmd) => Backlog.addBacklogItem(cmd));

  return item;
}

program.addCommand(sprintCommands());
program.addCommand(itemCommands());

program.parse(process.argv);
