
const FileIO = require("./fileIO");
const fileIO = new FileIO;

// makehtml constructs html file using inquirer response  output
// array = Array of employee objects forming team 
function makehtml(array) {
    if (array.length == 0) {
        console.log("No Team Members")
        return "No Team Members"
    }
    let teamcards = "";
    //    html file is composed of firsthalf + teamcards + secondhalf
    const secondhalf = fileIO.read(`${__dirname}/secondhalf.txt`)
    const firsthalf = fileIO.read(`${__dirname}/firsthalf.txt`);
    array.forEach(element => {
        switch (element.getRole()) {
            case 'Manager':
                teamcards += managercard(element)
                break;
            case 'Engineer':
                teamcards += engineercard(element)
                break;
            case 'Intern':
                teamcards += interncard(element)
                break;
            default:
                break;
        }
    });
    let htmlout = firsthalf + teamcards + secondhalf;
    // Get rid of leading and trailing backticks to make html file
    fileIO.write("./output/index.html", htmlout.slice(1, -1))
    // return htmlout.txt file for testing purposes
    return htmlout
}

function engineercard(element) {
    return (`
   <div class="card">
    <div class="cardhead">
        <h3>${element.name}</h3>
        <h4>Engineer <i class="fas fa-hard-hat"></i></h4>
    </div>
    <ul>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class ="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li class="schoolrev"><a href="https://github.com/${element.github}">GitHub Name<span class="schooltext">${element.github}</span></a> </li>
    </ul >
  </div>`)

}

function interncard(element) {
    return (`
   <div class="card">
    <div  class="cardhead">
        <h3>${element.name}</h3>
        <h4>Intern  <i class="fas fa-atom"></i></h4>
    </div>
    <ul>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li class="schoolrev">School<span class="schooltext">${element.school}</span></li>
    </ul>
  </div>`)
}

function managercard(element) {
    return (`
    <div class="card">
    <div class="cardhead">
        <h3>${element.name}</h3>
        <h4>Manager  <i class="fas fa-coffee"></i></h4>
    </div>
    <ul>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class ="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li>Office # :${element.officenumber}</li>
    </ul>
  </div>`)
}

module.exports = makehtml;
