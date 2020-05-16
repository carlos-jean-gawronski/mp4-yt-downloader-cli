const inquirer = require("inquirer");

module.exports = {
  askVideoTitle: async () => {
    return await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the name for the file:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter a name.";
          }
        },
      },
    ]);
  },
};
