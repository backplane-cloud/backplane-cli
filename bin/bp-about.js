const pkg = require("../package.json");

const colors = require("colors");

const logo = `Backplane CLI`.cyan;
console.clear();

console.log(logo);

const about = ` 
To get started, you can register your first user:

bp user register --displayname <DisplayName> --email <EmailAddress> --password <Password> --orgname <OrganisationName>

For full documentation, visit https://backplane.dev/quick-start

CLI version: ${pkg.version}
Package Name: ${pkg.name}
Github: ${pkg.homepage}
`;
console.log(about);
console.log(`Backplane Software (c) - 2024\n`);
