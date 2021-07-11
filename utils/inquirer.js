
const inquirer = require("inquirer");

const managerquestions = [
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
        message: "What would you like to do next ? ",
        choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
        name: "Action1"
    }

];

const Internquestions = [{
    type: "input",
    message: "What school did/does intern attend? ",
    name: "School"
}];

const NewEmployeequestions = [
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
// TODO: Create a function to initialize app
function askquestions() {
    inquirer.prompt(managerquestions)
    .then((resp) => {
        console.log("manager resp", resp)
        inquirer.prompt(menuquestion)
        .then((response) =>{
            console.log("menu repsonse", response)
            const Action1 = response.Action1;
            if(Action1 === 'Add Engineer')
            { quest=NewEmployeequestions}
            else if(Action === 'Add Intern'){
                quest= NewEmployeequestions.concat(Intern)
            }
            else {
                return console.log("done")}
            inquirer.prompt(quest)
            .then((res)=>{
                console.log(res);
            })
            // return generateHTMl(response.teamManagerName)}
            // writeToFile("./index.html", )
        });
    });
    }

    module.exports = askquestions;
    