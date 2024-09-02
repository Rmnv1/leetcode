// scripts/generateTaskIndex.js

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = __dirname + "/..";

function getTaskFolders() {
  return fs
    .readdirSync(PROJECT_ROOT + "/src", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name.match(/^\d+\./))
    .map((dirent) => dirent.name);
}

function generateTaskHtml(taskFolder, jsCode) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${taskFolder}</title>
      <style>
        .code-container {
          border: 1px solid #ccc;
          padding: 10px;
          background-color: #fff;
          font-family: monospace;
          white-space: pre;
        }
      </style>
    </head>
    <body>
      <h1>${taskFolder}</h1>
      <div class="code-container">${jsCode}</div>
      <script src="main.js"></script>  </body> </html>
  `;
}

function createTaskIndex(taskFolder) {
  const folderPath = path.join(PROJECT_ROOT, "src", taskFolder);
  const indexHtmlPath = path.join(folderPath, "index.html");
  const mainJsPath = path.join(folderPath, "main.js");

  if (!fs.existsSync(indexHtmlPath) && fs.existsSync(mainJsPath)) {
    const jsCode = fs.readFileSync(mainJsPath, "utf-8");
    const htmlContent = generateTaskHtml(taskFolder, jsCode);
    fs.writeFileSync(indexHtmlPath, htmlContent);
    console.log(`index.html created for ${taskFolder}`);
  } else if (!fs.existsSync(mainJsPath)) {
    console.log(`main.js not found in ${taskFolder}, skipping folder`);
  }
}

function createAllTaskIndexes() {
  const taskFolders = getTaskFolders();
  taskFolders.forEach(createTaskIndex);
}

module.exports = { createAllTaskIndexes };
