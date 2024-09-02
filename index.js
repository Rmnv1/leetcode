const { createRootIndex } = require("./scripts/generateRootIndex");
const { createAllTaskIndexes } = require("./scripts/generateTaskIndex");

createRootIndex();
createAllTaskIndexes();

console.log("Build process completed!");
