const pkg = require("../package.json");

const colors = require("colors");

console.clear();

console.log("Getting Started Guide".yellow);

const doc = ` 
To create an App, first login, then use bp app add --displayname 'My App' --code my-app --owner...
`;
console.log(doc);

const footer = `
Backplane CLI Version: ${pkg.version}
Backplane Software - All Rights Reserved 2023
`.gray;

console.log(footer);
