#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");

program
  .name("flutterberry")
  .description("Generate a Flutter project with starter files"); // Update description

program.parse(process.argv);

generateFlutterProject();

function generateFlutterProject() {
  const projectDir = path.join(process.cwd(), "my_flutter_project"); // Fixed project name
  const sourceLibDir = path.join(__dirname, "lib");
  const destinationLibDir = path.join(projectDir, "lib");

  try {
    fs.mkdirSync(projectDir);
    copyDirectory(sourceLibDir, destinationLibDir);
    console.log("Flutter project generated successfully!");
  } catch (error) {
    console.error("Error creating project:", error);
  }
}

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });
  fs.readdirSync(source).forEach((item) => {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}
