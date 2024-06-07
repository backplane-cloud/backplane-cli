const program = require("commander");

program
  .command("open")
  .description("Open Backplane Console")
  .action(() => {
    import("open").then((open) => {
      open.default("http://localhost:8000");
    });
  });

program.parse(process.argv);
