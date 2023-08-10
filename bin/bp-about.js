const pkg = require("../package.json");

const colors = require("colors");

const logo = ` ______              _           _                    
(____  \            | |         | |                   
 ____)  )_____  ____| |  _ ____ | | _____ ____  _____ 
|  __  ((____ |/ ___) |_/ )  _ \| |(____ |  _ \| ___ |
| |__)  ) ___ ( (___|  _ (| |_| | |/ ___ | | | | ____|
|______/\_____|\____)_| \_)  __/ \_)_____|_| |_|_____)
                          |_|`.cyan;
console.clear();

console.log(logo);

const about = ` 


Backplane is a cross-cloud abstraction API, cloud environment provisioning, 
governance and development platform. 

Backplane Core is provided Open Source with enterprise premium features 
available under a subscription-based license (Backplane X)


Backplane CLI Version: ${pkg.version}
Author: ${pkg.author}
Github: https://github.com/backplane-cloud/
`;
console.log(about);
console.log(`Backplane Cloud\nAll Rights Reserved 2023\n`.gray);
