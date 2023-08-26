const program = require("commander");
const token = require("./commands/token");

program
  .command("set")
  .description("Set JWT Token -- Get at https://login.backplane.cloud")
  .action(token.set);

program.command("show").description("Show JWT Token").action(token.show);

program.command("remove").description("Remove JWT Token").action(token.remove);

program.parse(process.argv);
