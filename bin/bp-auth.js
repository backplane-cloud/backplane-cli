const program = require("commander");
const auth = require("./commands/auth");
const colors = require("colors");

program
  .command("login")
  .description("Login to Backplane")
  .option("-e, --email <email>", "Use Email Address")
  .option("-p, --password <password>", " Enter Password")
  .action((cmd) => auth.login(cmd));

program
  .command("logout")
  .description("Logout from Backplane")
  .action(auth.logout);

program.command("me").description("Check Logged in User").action(auth.me);

program
  .command("setserver")
  .description("Specify the Server URL")
  .action(auth.setserver)
  .option("-s, --server <server>", "Set Server URL");

program
  .command("server")
  .description("Shows the API Server End Point")
  .action(auth.server);

program.parse(process.argv);
