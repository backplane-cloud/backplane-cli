#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const colors = require("colors");
program
  .command("", `\n BACKPLANE CLI (v${pkg.version})`.yellow)
  .version(`${pkg.version}`)

  .command("", "\n".yellow)
  .command("app", "Manage Apps".yellow)
  .command("template", "Configure Environment App Templates")
  .command("service", "Publish to Integration Services Catalog".yellow)

  .command("", "\n")
  .command("product", "Manage Products")
  .command("platform", "Manage Platforms")
  .command("org", "Manage Orgs")
  .command("cloud", "Register Cloud Service Provider")
  .command("budget", "Manage Organisational Budget")
  .command("request", "Manage Approval Requests")

  .command("", "\n")
  .command("auth", "Login to Backplane".yellow)
  .command("token", "Manage API JWT Token".yellow)
  .command("user", "Manage Users".cyan)
  .command("team", "Manage Teams and Team Members".cyan)
  .command("assign", "Manage RBAC Assignments".cyan)
  .command("role", "Manage Roles and Role Actions".cyan)

  .command("", "\n".gray)
  .command("gem", "General Exemption Manager".gray)
  .command("slim", "Software License Inventory Manager".gray)
  .command("game", "General Access Management Engine".gray)
  .command("roi", "Resource Optimisation Insights".gray)
  .command("oopa", "Open Onboarding Platform API".gray)
  .command("graph", "Cloud Graph".gray)
  .command("what", "Who has access to What ?".gray)
  .command("backlog", "Manage Product Backlog, Sprints and Items".gray)

  .command("", "\n")
  .command("getting-started", "Getting Started User Guide")
  .command("about", "About Backplane")
  .command("console", "Launch Backplane Console")

  .command("", "\n")

  .parse(process.argv);
