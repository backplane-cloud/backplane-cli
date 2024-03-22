const program = require("commander");
const user = require("./commands/user");

// GET all
program
  .command("list")
  .description("List users")
  .option("-s, --stringify", "Return as JSON string")
  .action(user.getUsers);

// GET
program
  .command("show")
  .description("Show an user")
  .option("-i, --id <user ID>", "Enter user ID")
  .action((cmd) => user.getUser(cmd));

// DELETE
program
  .command("remove")
  .description("Remove an user")
  .option("-i, --id <user ID>", "Enter user ID")
  .action((cmd) => user.deleteUser(cmd));

// CREATE
program
  .command("add")
  .description("Creates a new user")
  .option("--displayname <value>", "Enter user display name e.g. 'My user X'")
  .option("--email <value>", "Enter user code e.g. my-user-x")
  .option("--password <value>", "Enter User ID")
  // .option("--orgid <value", "Enter Org ID")
  .option("--usertype <value>", "Developer, ProductOwner, Root etc.")
  .action((cmd) => user.addUser(cmd));

// REGISTER
program
  .command("register")
  .description("Registers a new user")
  .option(
    "-d, --displayname <value>",
    "Enter user display name e.g. 'My user X'"
  )
  .option("-e, --email <value>", "Enter user code e.g. my-user-x")
  .option("-p, --password <value>", "Enter User ID")
  //.option("--orgid <value", "Enter Org ID")
  .option("-u, --usertype <value>", "Developer, ProductOwner, Root etc.")
  .option("-o, --orgname <value", "Org Displayname")
  .action((cmd) => user.registerUser(cmd));

// Update
program
  .command("update")
  .description("Update User")
  .option("-i, --id <user ID>", "Enter User ID")
  .option("--displayname <value>", "Enter user display name e.g. 'My user X'")
  .option("--email <value>", "Enter user code e.g. my-user-x")
  .option("--password <value>", "Enter User ID")
  .option("--orgid <value", "Enter Org ID")
  .option("--usertype <value>", "Developer, ProductOwner, Root etc.")

  .action((cmd) => user.updateUser(cmd));

program.parse(process.argv);
