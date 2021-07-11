const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is the team managers name? ",
        name: "ManagerName"
    },
    {
        type: "input",
        message: "What is manager's employeeID? ",
        name: "ManagerID"
    },
    {
        type: "input",
        message: "What is manager's email address ? ",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is managers office number ? ",
        name: "managersOfficeNumber"
    }];
    
    
const menuquestion =[
    {
        type: "rawlist",
        message: "Which licenses are you acknowledging? ",
        choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
        name: "Action1"
    }

];

const Intern = [{
    type: "input",
    message: "What school did/does intern attend? ",
    name: "School"
}];

const NewEmployee = [
    {
        type: "input",
        message: "What is New Employee name? ",
        name: "EmployeeName"
    },
    {
        type: "input",
        message: "What is New Employee ID? ",
        name: "EmployeeID"
    },
    {
        type: "input",
        message: "What is New Employee email address ? ",
        name: "EmployeeEmail"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {

        });
    let t=1;
    inquirer.prompt(menuquestion)
        .then((response) =>{
            const Action1 = response.Action1;
            if(Action1 === 'Add Engineer' || 'Add Intern')
            {
                inquirer.prompt(NewEmployee)
                .then((response)=>{
                    console.log(response);
                    if(Action1 == 'Add Intern')
                        inquirer.prompt(Intern)
                        .then( (resp) => {
                            console.log("its an intern")
                        })
                    else{ console.log("its an engineer")}

                })
            }
            else { t=-1; 
                return console.log("done")}
                // return generateHTMl(response.teamManagerName)}
            // writeToFile("./index.html", )
        });
    }
// Function call to initialize app

console.log("im here")
init()