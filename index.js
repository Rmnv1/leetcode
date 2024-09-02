// index.js

const { createRootIndex } = require("./scripts/generateRootIndex");
const { createAllTaskIndexes } = require("./scripts/generateTaskIndex");

// Запускаем скрипты для генерации index.html файлов
createRootIndex();
createAllTaskIndexes();

console.log("Build process completed!");
