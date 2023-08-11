#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const colors = require("colors");

program
  .version("1.0.0")

  .command("", "\n----------[ Development ]----------")
  .command("app", "Manage Apps".yellow)
  .command("service", "Publish to Integration Services Catalog".yellow)

  .command("", "\n----------[ Business Administration ]----------")
  .command("product", "Manage Products".green)
  .command("platform", "Manage Platforms".green)
  .command("org", "Manage Orgs".green)
  .command("request", "Manage Approval Requests".green)

  .command("", "\n-----------[ Access Administration ]--------")
  .command("auth", "Login to Backplane".yellow)
  .command("token", "Manage API JWT Token".yellow)
  .command("user", "Manage Users".cyan)
  .command("team", "Manage Teams and Team Members".cyan)
  .command("assign", "Manage RBAC Assignments".cyan)
  .command("role", "Manage Roles and Role Actions".cyan)

  .command("", "\n----------[ Cloud Governance] ----------")
  .command("cost", "Cost Data for Org, Platform, Products and Apps".gray)
  .command("policy", "Policy Data for apps*".gray)
  .command("access", "RBAC Data for apps*".gray)

  .command("", "\n----------[ Marketplace Extensions ]----------".gray)
  .command("gem", "General Exemption Manager".gray)
  .command("slim", "Software License Inventory Manager".gray)
  .command("game", "General Access Management Engine".gray)
  .command("roi", "Resource Optimisation Insights".gray)
  .command("oopa", "Open Onboarding Platform API".gray)
  .command("graph", "Cloud Graph".gray)
  .command("what", "Who has access to What ?".gray)

  .command("", "\n----------[ Documentation ]----------n")
  .command("getting-started", "Getting Started User Guide")
  .command("about", "About Backplane")

  .command("", "\n")

  .parse(process.argv);
