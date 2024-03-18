#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");

program
  .name("flutterberry")
  .description(
    "Copy starter files into an existing Flutter project's lib folder"
  );

function copyStarterLib() {
  const sourceLibDir = path.join(__dirname, "lib");
  const destinationLibDir = path.join(process.cwd(), "lib");

  try {
    // Delete the existing 'lib' folder (if it exists)
    if (fs.existsSync(destinationLibDir)) {
      fs.rmSync(destinationLibDir, { recursive: true, force: true });
    }

    copyDirectory(sourceLibDir, destinationLibDir);
    console.log("Starter files copied successfully!");
  } catch (error) {
    console.error("Error copying files:", error);
  }
}

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  fs.readdirSync(source).forEach((item) => {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destinationPath); // Recurse for subdirectories
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

copyStarterLib();
