const highlight = (message) => console.log(`\x1b[33m${message}`);
const space = () => console.log();

console.log("Hey, there. Let's write some code.");
console.log("First, install express by using: ");
highlight('npm install express --save');
highlight('npm install body-parser');

//tsconfig.json url: https://raw.githubusercontent.com/emilionavarro/class-nodejs/phase6/tsconfig.json
console.log("Get my tsconfig from here: https://raw.githubusercontent.com/emilionavarro/class-nodejs/phase6/tsconfig.json");

//launch config: https://raw.githubusercontent.com/emilionavarro/class-nodejs/phase6/.vscode/launch.json
console.log("Get my launch.json from here: https://raw.githubusercontent.com/emilionavarro/class-nodejs/phase6/.vscode/launch.json");