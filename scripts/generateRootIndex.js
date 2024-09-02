// scripts/generateRootIndex.js

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = __dirname + "/..";
const OUTPUT_FILE = path.join(PROJECT_ROOT, "public", "index.html"); // Изменено

function getTaskFolders() {
  return fs
    .readdirSync(PROJECT_ROOT + "/src", { withFileTypes: true }) // Изменено
    .filter((dirent) => dirent.isDirectory() && dirent.name.match(/^\d+\./))
    .map((dirent) => dirent.name);
}

function generateIndexHtml(folders) {
  const listItems = folders
    .map((folder) => {
      const [taskNumber, ...taskNameParts] = folder.split(".");
      const taskName = taskNameParts.join(".");
      const taskLink = `../src/${folder}/index.html`; // Путь относительно public/
      return `<li><a href="${taskLink}">${taskNumber}. ${taskName}</a></li>`;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>LeetCode Practice</title>
    </head>
    <body>
      <h1>LeetCode Practice</h1>
      <ul>${listItems}</ul>
    </body>
    </html>
  `;
}

function createRootIndex() {
  const taskFolders = getTaskFolders();
  const htmlContent = generateIndexHtml(taskFolders);
  fs.writeFileSync(OUTPUT_FILE, htmlContent);
  console.log("index.html successfully generated!");
}

module.exports = { createRootIndex };
