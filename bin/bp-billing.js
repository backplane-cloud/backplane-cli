const program = require("commander");
const app = require("../commands/app");
const colors = require("colors");

program
  .command("org")
  .description("Show Billing for Org".gray)
  .option("--id <org ID>", "Enter Org ID")
  .action((cmd) => org.getOrgBilling(cmd));

program
  .command("platform")
  .description("Show Billing for Platform".gray)
  .option("--id <Platform ID>", "Enter Platform ID")
  .action((cmd) => platform.getPlatformBilling(cmd));

program
  .command("product")
  .description("Show Billing for Product".gray)
  .option("--id <Product ID>", "Enter Product ID")
  .action((cmd) => product.getProductBilling(cmd));

program
  .command("app")
  .description("Show Billing for App")
  .option("--id <Org ID>", "Enter App ID")
  .action((cmd) => app.getAppBilling(cmd));

program.parse(process.argv);
