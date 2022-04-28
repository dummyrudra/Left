const cron = require("node-cron");
let shell = require("shelljs");

cron.schedule("* * * * * *", () => {
  console.log("Scheduler is running...");
  if (shell.exec("node index").code !== 0) console.log("Something went wrong.");
});
