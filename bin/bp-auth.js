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

program.parse(process.argv);
