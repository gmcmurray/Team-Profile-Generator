
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

function askmanager(){
    inquirer.prompt(managerquestions)
    .then((response)=>{
        console.log(response)
        askmenu();
    })
    
}

function askmenu(){
    let buildteam = true
    inquirer.prompt(menuquestion)
        .then((response) =>{
            const Action1 = response.Action1;
            console.log("menu response", response,Action1)
            switch (Action1) {
                case 'Finish Building Team':
                    buildteam = false;
                    break;
                case 'Add Engineer':
                    quest=NewEmployeequestions
                    inquirer.prompt(quest).
                    then((rep) => {
                        console.log(rep)
                        if(rep !="Finish Building Team") {askmenu();}
                    })
                    break;
                case 'Add Intern':
                    quest= NewEmployeequestions.concat(Internquestions)
                    inquirer.prompt(quest).
                    then((rep) => {
                        console.log(rep)
                        if(rep !="Finish Building Team") {askmenu();}
                    })
                    break;
            
                default:
                    break;
            }
        })

        }

    
    
    module.exports = askmenu;
    module.exports = askmanager;
    