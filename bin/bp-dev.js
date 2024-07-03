const program = require("commander");

program
  .command("console")
  .description("Open Backplane Console")
  .action(() => {
    import("open").then((open) => {
      open.default("http://localhost:8000");
    });
  });

program
  .command("swagger")
  .description("View Open API Spec")
  .action(() => {
    import("open").then((open) => {
      open.default("http://localhost:8000/openapi");
    });
  });

program.parse(process.argv);
