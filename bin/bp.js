#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const colors = require("colors");

program
  .version("1.0.0")

  .command("", "\n----------[ Developer ]----------")
  .command("app", "Manage Apps".yellow)
  .command("service", "Publish to Integration Services Catalog".yellow)

  .command("", "\n----------[ Governance ]----------")
  .command("product", "Manage Products")
  .command("platform", "Manage Platforms")
  .command("org", "Manage Orgs")
  .command("request", "Manage Approval Requests")

  .command("", "\n-----------[ Access Management ]--------")
  .command("auth", "Login to Backplane".yellow)
  .command("token", "Manage API JWT Token".yellow)
  .command("user", "Manage Users".cyan)
  .command("team", "Manage Teams and Team Members".cyan)
  .command("assign", "Manage RBAC Assignments".cyan)
  .command("role", "Manage Roles and Role Actions".cyan)

  .command("", "\n----------[ Cloud Governance] ----------")
  .command("cost", "Cost Data for Org, Platform, Products and Apps".gray)
  .command("policy", "Policy Management".green)
  .command("access", "Access Management".green)
  .command("resource", "Resource Explorer".gray)

  .command("", "\n----------[ Extensions ]----------".gray)
  .command("gem", "General Exemption Manager".gray)
  .command("slim", "Software License Inventory Manager".gray)
  .command("game", "General Access Management Engine".gray)
  .command("roi", "Resource Optimisation Insights".gray)
  .command("oopa", "Open Onboarding Platform API".gray)
  .command("graph", "Cloud Graph".gray)
  .command("what", "Who has access to What ?".gray)
  .command("backlog", "Product Backlog management and workflows".gray)

  .command("", "\n----------[ Documentation ]----------")
  .command("getting-started", "Getting Started User Guide")
  .command("about", "About Backplane")

  .command("", "\n")

  .parse(process.argv);
