const highlight = (message) => console.log(`\x1b[33m${message}`);
const space = () => console.log();

console.log("Hey, there. Let's write some code.");
console.log("First, install express by using: ");
highlight('npm install express --save');
highlight('npm install body-parser');