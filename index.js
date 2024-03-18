#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

program
  .name("flutterberry")
  .description(
    "Copy starter files into an existing Flutter project's lib folder and install dependencies"
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
  try {
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

    installDependencies();
    console.log(
      "Starter files copied and dependencies installed successfully!"
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

function installDependencies() {
  // Regular dependencies
  const dependencies = [
    "auto_route",
    "dartz",
    "flex_color_scheme",
    "flutter_bloc",
    "freezed_annotation",
    "get_it",
    "injectable",
    "json_annotation",
  ];

  // Dev dependencies
  const devDependencies = [
    "auto_route_generator",
    "build_runner",
    "freezed",
    "injectable_generator",
    "json_serializable",
  ];

  installPackages(dependencies);
  installPackages(devDependencies, true); // Install dev dependencies
}

function installPackages(packagesList, dev = false) {
  const installProcess = spawn(
    "flutter",
    ["pub", "add", ...packagesList, ...(dev ? ["-d"] : [])],
    { cwd: process.cwd() }
  );
  logProcessOutput(installProcess);
}

function logProcessOutput(childProcess) {
  childProcess.stdout.on("data", (data) => console.log(data.toString()));
  childProcess.stderr.on("data", (data) => console.error(data.toString()));
}

copyStarterLib();
