const program = require("commander");
const Team = require("./commands/team");

const commander = require("commander");

function memberCommands() {
  const member = new commander.Command("member");
  member
    .command("list")
    .description("List members of a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .action((cmd) => Team.listMembers(cmd));

  member
    .command("add")
    .description("Add members to a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .option("-u, --userid <Team ID>", "Enter User ID")
    .action((cmd) => Team.addMembers(cmd));

  member
    .command("remove")
    .description("Remove members from a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .option("-u, --userid <Team ID>", "Enter User ID")
    .action((cmd) => Team.removeMembers(cmd));

  return member;
}

function ownerCommands() {
  const owner = new commander.Command("owner");
  owner
    .command("list")
    .description("List members of a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .action((cmd) => Team.listOwners(cmd));

  owner
    .command("add")
    .description("Add members to a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .option("-u, --userid <Team ID>", "Enter User ID")
    .action((cmd) => Team.addOwners(cmd));

  owner
    .command("remove")
    .description("Remove members from a team")
    .option("-i, --id <Team ID>", "Enter Team ID")
    .option("-u, --userid <Team ID>", "Enter User ID")
    .action((cmd) => Team.removeOwners(cmd));

  return owner;
}

// GET all
program
  .command("list")
  .description("List Teams")
  .option("-s, --stringify", "Return as JSON string")
  .action(Team.getTeams);

// GET
program
  .command("show")
  .description("Show a Team")
  .option("-i, --id <Team ID>", "Enter Team ID")
  .option("-s, --stringify", "Return as JSON string")
  .action((cmd) => Team.getTeam(cmd));

// GET
program
  .command("ismember")
  .description("Checks whether a user is a member of a team")
  .option("-i, --id <Team ID>", "Enter Team ID")
  .option("-u, --userid <Team ID>", "Enter USer ID")
  .action((cmd) => Team.isMember(cmd));

// // GET
// program
//   .command("listmembers")
//   .description("Checks whether a user is a member of a team")
//   .option("-i, --id <Team ID>", "Enter Team ID")
//   .option("-u, --userid <Team ID>", "Enter USer ID")
//   .action((cmd) => Team.listMembers(cmd));

// PATCH
// program
//   .command("addmembers")
//   .description("Add members to a team")
//   .option("-i, --id <Team ID>", "Enter Team ID")
//   .option("-u, --userid <Team ID>", "Enter User ID")
//   .action((cmd) => Team.addMembers(cmd));

// PATCH
// program
//   .command("removemembers")
//   .description("Remove Member from a Team")
//   .option("-i, --id <Team ID>", "Enter Team ID")
//   .option("-u, --userid <Team ID>", "Enter User ID")
//   .action((cmd) => Team.removeMembers(cmd));

// PATCH
// program
//   .command("addowners")
//   .description("Add Owners to a Team")
//   .option("-i, --id <Team ID>", "Enter Team ID")
//   .option("-u, --userid <Team ID>", "Enter User ID")
//   .action((cmd) => Team.addOwners(cmd));

// // PATCH
// program
//   .command("removeowners")
//   .description("Remove Owners from a team")
//   .option("-i, --id <Team ID>", "Enter Team ID")
//   .option("-u, --userid <Team ID>", "Enter User ID")
//   .action((cmd) => Team.removeOwners(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an Team")
  .option("-i, --id <Team ID>", "Enter Team ID")
  .action((cmd) => Team.deleteTeam(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new Team")
  .option("--displayname <random number>", "Enter Display Name for Team")
  .option("--code <User ID>", "Enter Team Code")
  .option("--scope <User ID>", "Enter Team Scope")
  .option("--ownerid <User ID", "Enter Owner ID for Team")
  .action((cmd) => Team.addTeam(cmd));

// UPDATE
program
  .command("update")
  .description("Update Team")
  .option("--id <Team ID>", "Enter Team ID")
  .option("--displayname <random number>", "Enter Display Name for Team")
  .option("--code <User ID>", "Enter Team Code")
  .option("--scope <User ID>", "Enter Team Scope")
  .option("--ownerid <User ID", "Enter Owner ID for Team")
  .option("--orgid <OrgID>", "Enter Org Id")
  .action((cmd) => Team.updateTeam(cmd));

program.addCommand(memberCommands());
program.addCommand(ownerCommands());

program.parse(process.argv);
