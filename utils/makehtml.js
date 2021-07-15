
const FileIO = require("./utils/fileIO");
const fileIO = new FileIO;

function makehtml(array){
    let cards ="";
    let firsthalf = fileIO.read("./firsthalf.txt");
    let secondhalf = fileIO.read("./secondhalf.txt")
    array.forEach(element => {
        console.log("one at a time",element.getRole())
        switch (element.getRole()) {
            case 'Manager':
                cards+=managercard(element)
                break;
            case 'Engineer':
                cards+=engineercard(element)
                break;
            case 'Intern':
                cards+=interncard(element)
                break;
            default:
                break;
        }
    });
return(firsthalf+cards+secondhalf)
}

function engineercard(element){
   return( `
   <div class="card">
    <div class="cardhead">
        <h3>${element.name}</h3>
    </div>
    <ul>
        <li>Engineer <i class="fas fa-hard-hat"></i></li>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class ="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li class="schoolrev">GitHub Name<span class="schooltext">${element.github}</span> </li>
    </ul >
  </div>`)

}

function interncard(element){
   return( `
   <div class="card">
    <div  class="cardhead">
        <h3>${element.name}</h3>
    </div>
    <ul>
        <li>Intern  <i class="fas fa-atom"></i></li>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li class="schoolrev">School<span class="schooltext">${element.school}</span></li>
    </ul>
  </div>`)
}

function managercard(){
    return(`
    <div class="card">
    <div class="cardhead">
        <h3>${managername}</h3>
    </div>
    <ul>
        <li>Manager  <i class="fas fa-coffee"></i></li>
        <li>ID#: ${managerid}</li>
        <li><a href="mailto:${manageremail}" class ="schoolrev">Email<span class="schooltext">${manageremail}</span></a></li>
        <li>Office # :${manageroffice}</li>
    </ul>
  </div>`)
}
module.exports = makehtml;