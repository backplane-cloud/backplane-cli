const BackplaneAPI = require("../lib/BackplaneAPI");
// const colors = require("colors");

//const backplaneAPI = new BackplaneAPI();

const org = {
  async getOrgs(cmd) {
    try {
      const backplane = new BackplaneAPI();
      const orgs = await backplane.getOrgs(cmd.stringify);
      console.log(orgs);
    } catch (err) {
      //console.error(err.message.red);
    }
  },

  async getOrg(cmd) {
    if ((cmd.id === undefined) & (cmd.code === undefined)) {
      console.log(
        "Please provide either an Org ID e.g. --id <org id> or --code <org code>"
      );
      return;
    }

    try {
      const backplane = new BackplaneAPI();
      const orgs = await backplane.getOrg(
        cmd.id ? cmd.id : cmd.code,
        cmd.stringify
      );

      console.log(orgs);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async deleteOrg(cmd) {
    if (cmd.id === undefined) {
      console.log("Missing Org ID, use --id <org id>");
      return;
    }
    try {
      const backplane = new BackplaneAPI();
      const org = await backplane.deleteOrg(cmd.id);
      console.log(org);

      // console.log(`Org has been successfully deleted`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async addOrg(cmd) {
    // Check Required options have been provided.
    if ((cmd.displayname === undefined) | (cmd.license === undefined)) {
      console.log(
        "Need to provide --code, --displayname, --license and --owner <owner ID>"
          .red
      );
      return;
    }
    try {
      const backplane = new BackplaneAPI();

      const org = await backplane.addOrg(
        //cmd.code,
        cmd.displayname,
        cmd.license,
        cmd.owner,
        cmd.budget,
        cmd.currency
      );

      //console.log(`Org ${org.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async updateOrg(cmd) {
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

      const csp = {
        provider: cmd.provider,
        tenantId: cmd.tenantid,
        clientId: cmd.clientid,
        clientSecret: cmd.clientsecret,
        subscriptionId: cmd.subscriptionid,
      };

      await backplane.updateOrg(
        cmd.id,
        cmd.code,
        cmd.displayname,
        cmd.license,
        cmd.owner,
        cmd.status,
        budget,
        csp
      );

      //console.log(`Org ${org.name} has been successfully created`);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async showTree(cmd) {
    // Check Required options have been provided.
    if ((cmd.id === undefined) & (cmd.code === undefined)) {
      console.log(
        "Need to provide valid Org ID or Code --id or --code , use: bp org list to view Org IDs"
          .red
      );
      return;
    }

    try {
      const backplane = new BackplaneAPI();
      const org = await backplane.getOrg(cmd.code ? cmd.code : cmd.id);

      // Output Org Code
      cmd.full
        ? console.log(
            `[org] ${org.code.blue} [${org._id.gray}] [${org.budget[0].currency}: ${org.budget[0].budget}]`
          )
        : console.log(`[org] ${org.code.blue}`);

      // Get Platforms associated to Org
      const platforms = await backplane.getPlatforms();

      let orgPlatforms = platforms.filter(
        (platform) => platform.orgId === org._id
      );

      // Get Products
      const products = await backplane.getProducts();

      // Get Apps
      const apps = await backplane.getApps();

      orgPlatforms.map((platform) => {
        cmd.full
          ? console.log(
              `|\n|--> [platform] ${platform.code.yellow} [${platform._id.gray}] [${platform.budget[0].currency}: ${platform.budget[0].budget}]`
            )
          : console.log(`|\n|--> [platform] ${platform.code.yellow}`);

        let platformProducts = products.filter(
          (product) => product.platformId === platform._id
        );
        platformProducts.map((product) => {
          cmd.full
            ? console.log(
                `|        |\n|        |---> [product] ${product.code.green} [${product._id.gray}] [${product.budget[0].currency}: ${product.budget[0].budget}]`
              )
            : console.log(
                `|        |\n|        |---> [product] ${product.code.green}`
              );

          let productApps = apps.filter((app) => app.productId === product._id);
          productApps.map((app) =>
            cmd.full
              ? console.log(
                  `|                  |\n|                  |--> [app] ${app.code.red} [${app.cloud.gray}] [${app._id.gray}] [${app.budget[0].currency}: ${app.budget[0].budget}]`
                )
              : console.log(
                  `|                  |\n|                  |--> [app] ${app.code.red}`
                )
          );
        });
      });

      console.log("X");
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async getOrgRequest(cmd) {
    // if (cmd.id === undefined) {
    //   console.log("Missing request ID, use --id <request id>".red);
    //   return;
    // }
    try {
      const backplane = new BackplaneAPI();
      const requests = await backplane.getOrgRequest(cmd.id);

      console.log(requests);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = org;
