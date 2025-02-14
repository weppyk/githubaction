const core = require("@actions/core");

try {
  const myInput = core.getInput("my-input");
  console.log(`Input received: ${myInput}`);

  core.setOutput("my-output", `Processed: ${myInput}`);
} catch (error) {
  core.setFailed(error.message);
}