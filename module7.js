// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
{
    type: "input",
    name; "title",
    message; "What is the title of your project?",
}
  {
    type: "input",
    name; "description",
    message; "Provide a short description of your project:",
  },
  {
    type: "input",
    name; "installation",
    message; "Installation instructions:",
  },
  {
    type: "input",
    name; "usage",
    message; "Usage information:",
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error("Error writing the README file:", err);
    } else {
      console.log(`${fileName} has been created successfully!`);
    }
  });
}
// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions)
.then((answers) => {
  const readmeContent = generateREADME(answers);
  writeREADME("README.md", readmeContent);
})
.catch((error) => {
  console.error("Something went wrong:", error);
});

// Function call to initialize app
init();
