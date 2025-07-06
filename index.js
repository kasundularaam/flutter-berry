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
    console.log("Copying starter files...⌛");
    await copyStarterLib();
    console.log("Starter files copied successfully! ✅");

    console.log("Installing dependencies... ⌛");
    await installDependencies();
    console.log("Dependencies installed successfully! ✅");

    console.log("Installing dev dependencies... ⌛");
    await installDevDependencies();
    console.log("Dev dependencies installed successfully! ✅");

    console.log("Re-fetching Dependencies... ⌛");
    await reFetchPub();
    console.log("Dependencies re-fetched successfully! ✅");

    console.log("Starting build runner... ⌛");
    await runBuildRunner();
    console.log(
      "Starter files? Check. Dependencies? Check. Awesome project setup? Check! 👍"
    );
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

async function copyStarterLib() {
  const sourceLibDir = path.join(__dirname, "lib");
  const destinationLibDir = path.join(process.cwd(), "lib");

  try {
    if (fs.existsSync(destinationLibDir)) {
      await fs.promises.rm(destinationLibDir, { recursive: true, force: true });
    }
    await copyDirectory(sourceLibDir, destinationLibDir);
  } catch (error) {
    throw error;
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
  const dependencies = [
    "auto_route",
    "dartz",
    "flex_color_scheme",
    "flutter_bloc",
    "freezed_annotation",
    "get_it",
    "injectable",
    "json_annotation",
    "google_fonts",
    "toastification",
  ];
  await installPackages(dependencies);
}

async function installDevDependencies() {
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
  return new Promise((resolve, reject) => {
    const installProcess = spawn(
      "flutter", // Simple approach since flutter works in your terminal
      ["pub", "add", ...packagesList, ...(dev ? ["-d"] : [])],
      {
        cwd: process.cwd(),
        shell: true, // This helps on Windows
      }
    );

    logProcessOutput(installProcess);

    installProcess.on("error", (error) => {
      reject(new Error(`Failed to run Flutter command: ${error.message}`));
    });

    installProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Installation failed with exit code ${code}`));
      }
    });
  });
}

async function reFetchPub() {
  return new Promise((resolve, reject) => {
    const buildProcess = spawn("flutter", ["pub", "get"], {
      cwd: process.cwd(),
      shell: true,
    });

    logProcessOutput(buildProcess);

    buildProcess.on("error", (error) => {
      reject(new Error(`Failed to run Flutter command: ${error.message}`));
    });

    buildProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Flutter pub get exited with code ${code}`));
      }
    });
  });
}

async function runBuildRunner() {
  return new Promise((resolve, reject) => {
    const buildProcess = spawn(
      "flutter",
      [
        "packages",
        "pub",
        "run",
        "build_runner",
        "build",
        "--delete-conflicting-outputs",
      ],
      {
        cwd: process.cwd(),
        shell: true,
      }
    );

    logProcessOutput(buildProcess);

    buildProcess.on("error", (error) => {
      reject(new Error(`Failed to run Flutter command: ${error.message}`));
    });

    buildProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build Runner exited with code ${code}`));
      }
    });
  });
}

function logProcessOutput(childProcess) {
  childProcess.stdout.on("data", (data) => console.log(data.toString()));
  childProcess.stderr.on("data", (data) => console.error(data.toString()));
}

executeTasks();
