
const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const FileIO = require("./fileIO");
const makehtml = require("./makehtml");
const fileIO = new FileIO();
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
        name: "ManagerEmail"
    },
    {
        type: "input",
        message: "What is managers office number ? ",
        name: "ManagersOfficeNumber"
    }];
    
const menuquestion =[
    {
        type: "list",
        message: "What would you like to do next ? ",
        choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
        name: "Action1"
    }

];

const Engineerquestions =[{
    type: "input",
    message: "What is your GitHub Username? ",
    name: "GitUserName"
}]

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
    let buildteam=[];
    inquirer.prompt(managerquestions)
    .then((response)=>{
        buildteam.push(new Manager(response.ManagerName,response.ManagerID,response.ManagerEmail,response.ManagersOfficeNumber));
        askmenu(buildteam);
    })
    
    return(buildteam)
}

function askmenu(team){
    inquirer.prompt(menuquestion)
        .then((response) =>{
            switch (response.Action1) {
                case 'Finish Building Team':
                    console.log("Finish Building Team")
                    makehtml(team);
                    // fileIO.write("./output/employee.txt",output)
                    break;
                case 'Add Engineer':
                    quest=NewEmployeequestions.concat(Engineerquestions)
                    inquirer.prompt(quest).
                    then((rep) => {
                        team.push( new Engineer(rep.EmployeeName,rep.EmployeeID,rep.EmployeeEmail,rep.GitUserName))
                        askmenu(team);
                    })
                    break;
                case 'Add Intern':
                    quest= NewEmployeequestions.concat(Internquestions)
                    inquirer.prompt(quest).
                    then((rep) => {
                        team.push( new Intern(rep.EmployeeName,rep.EmployeeID,rep.EmployeeEmail,rep.School))
                        askmenu(team);
                    })
                    break;
                default:
                    break;
            }
        
        })
        
        // team[0].getRole(),team[1].getRole(),team[2].getRole(),team[2].getSchool())
        return(team)
        }

    
    
    module.exports = askmenu;
    module.exports = askmanager;
    