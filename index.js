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

async function executeTasks() {
  try {
    await copyStarterLib();
    console.log("Starter files copied successfully!");

    await installDependencies();
    console.log("Dependencies installed successfully!");

    await installDevDependencies();
    console.log("Dev dependencies installed successfully!");

    console.log("All tasks completed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function copyStarterLib() {
  const sourceLibDir = path.join(__dirname, "lib");
  const destinationLibDir = path.join(process.cwd(), "lib");

  try {
    // Delete the existing 'lib' folder (if it exists)
    if (fs.existsSync(destinationLibDir)) {
      await fs.promises.rm(destinationLibDir, { recursive: true, force: true });
    }

    await copyDirectory(sourceLibDir, destinationLibDir);
  } catch (error) {
    throw error; // Re-throw the error
  }
}

async function copyDirectory(source, destination) {
  await fs.promises.mkdir(destination, { recursive: true });

  const items = await fs.promises.readdir(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    const stats = await fs.promises.lstat(sourcePath);

    if (stats.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
    } else {
      await fs.promises.copyFile(sourcePath, destinationPath);
    }
  }
}

async function installDependencies() {
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

  await installPackages(dependencies);
}

async function installDevDependencies() {
  // Dev dependencies
  const devDependencies = [
    "auto_route_generator",
    "build_runner",
    "freezed",
    "injectable_generator",
    "json_serializable",
  ];

  await installPackages(devDependencies, true);
}

async function installPackages(packagesList, dev = false) {
  const flutterExecutable = "C:/dev/flutter/bin/flutter.bat";

  return new Promise((resolve, reject) => {
    const installProcess = spawn(
      flutterExecutable,
      ["pub", "add", ...packagesList, ...(dev ? ["-d"] : [])],
      { cwd: process.cwd() }
    );

    logProcessOutput(installProcess);

    installProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Installation failed with exit code ${code}`));
      }
    });
  });
}

function logProcessOutput(childProcess) {
  childProcess.stdout.on("data", (data) => console.log(data.toString()));
  childProcess.stderr.on("data", (data) => console.error(data.toString()));
}

executeTasks();
