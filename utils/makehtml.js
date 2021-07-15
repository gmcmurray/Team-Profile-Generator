
const FileIO = require("./fileIO");
const fileIO = new FileIO;

function makehtml(array){
   if(array.length ==0){return(console.log("No Team Members"))}
   console.log("in makehtml", array)
   let cards ="";
   const secondhalf = fileIO.read(`${__dirname}/secondhalf.txt`)
   const firsthalf = fileIO.read(`${__dirname}/firsthalf.txt`);
    // let secondhalf = fileIO.read("secondhalf.txt")
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

console.log( "full html", firsthalf+cards+secondhalf )
let htmlout = firsthalf + cards + secondhalf;
// fileIO.write( "./output/index.txt",htmlout) 
fileIO.write("./output/index.html",htmlout.slice(1,-1))
return 
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

function managercard(element){
    return(`
    <div class="card">
    <div class="cardhead">
        <h3>${element.name}</h3>
    </div>
    <ul>
        <li>Manager  <i class="fas fa-coffee"></i></li>
        <li>ID#: ${element.id}</li>
        <li><a href="mailto:${element.email}" class ="schoolrev">Email<span class="schooltext">${element.email}</span></a></li>
        <li>Office # :${element.officenumber}</li>
    </ul>
  </div>`)
}

function helper(){
    let htmlout = fileIO.read(`${__dirname}/firsthalf.txt`) + fileIO.read(`${__dirname}/employee.txt`)+fileIO.read(`${__dirname}/secondhalf.txt`)
    return(fileIO.write("./output/index1.html",htmlout.slice(1,-1)));

}
module.exports = makehtml;
// module.exports = helper;