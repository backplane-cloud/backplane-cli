const BackplaneAPI = require("../lib/BackplaneAPI");
// const TokenManager = require("../lib/TokenManager");
const colors = require("colors");

const product = {
  async getProducts(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const products = await backplane.getProducts(cmd.all, cmd.stringify);

      console.log(products);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getProduct(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Product ID, use --id <product id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const products = await backplane.getProduct(cmd.id, cmd.stringify);

      console.log(products);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteProduct(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Product ID, use --id <product id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const product = await backplane.deleteProduct(cmd.id);
      console.log(product);

      //console.log(`Product has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addProduct(cmd) {
    // Check Required options have been provided.

    if (cmd.platformid === undefined) {
      console.log("Need to provide --displayname and --platformid".red);
      return;
    }

    try {
      const backplane = new BackplaneAPI();

      const product = await backplane.addProduct(
        cmd.displayname,
        cmd.description,
        cmd.platformid,
        cmd.ownerid,
        cmd.orgid
      );
      console.log(product);
      //console.log(`Product ${product.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateProduct(cmd) {
    // Check Required options have been provided.
    if (cmd.id === undefined) {
      console.log("Need to provide --id".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const budget = {
        year: cmd.budgetYear,
        budget: cmd.budgetAmount,
        currency: cmd.budgetCurrency,
      };

      await backplane.updateProduct(
        cmd.id,
        cmd.code,
        cmd.displayname,
        cmd.description,
        cmd.platformid,
        cmd.ownerid,
        cmd.status,
        cmd.orgid,
        budget
      );

      //console.log(`Product ${product.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getProductRequests(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing request ID, use --id <request id>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getProductRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getProductCost(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Product ID, use --id <Product ID>".red);
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const cost = await backplane.getProductCost(cmd.id, cmd.stringify);

      console.log(cost);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getProductBudgets(cmd) {
    if ((cmd.id === undefined) & (cmd.code === undefined)) {
      console.log(
        "Please provide either an Product ID e.g. --id <product id> or --code <product code>"
      );
      return;
    }

    try {
      const backplane = new BackplaneAPI();
      const budgets = await backplane.getProductBudgets(
        cmd.id ? cmd.id : cmd.code,
        cmd.stringify
      );

      budgets
        ? console.log(budgets)
        : console.log("No budget found for Product");
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = product;
