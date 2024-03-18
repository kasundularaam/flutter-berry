#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");

program
  .name("flutterberry")
  .description("Generate starter files for a Flutter project")
  .option("-p, --project-name <name>", "Name of the Flutter project");

program.parse(process.argv);

const options = program.opts();

if (!options.projectName) {
  console.error("Project name is required");
  program.help();
}

generateFlutterProject(options.projectName);

function generateFlutterProject(projectName) {
  const projectDir = path.join(process.cwd(), projectName);
  const libDir = path.join(projectDir, "lib");

  try {
    fs.mkdirSync(projectDir);
    fs.mkdirSync(libDir);

    createFile(path.join(libDir, "models", "model.dart"), "// model.dart");
    createFile(path.join(libDir, "views", "home.dart"), "// home.dart");
    createFile(path.join(projectDir, "main.dart"), "// main.dart");

    console.log("Flutter project generated successfully!");
  } catch (error) {
    console.error("Error creating project:", error);
  }
}

function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}
