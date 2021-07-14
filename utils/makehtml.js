const questions = require("./questions")

function makehtml(){

    console.log("place holder to make html");
}

function engineercard(){

}

function interncard(){

}

function managercard(){
    `<div class="card">
    <div class="cardhead">
        <h3>${managername}</h3>
    </div>
    <ul>
        <li>Manager  <i class="fas fa-coffee"></i></li>
        <li>ID#: ${managerid}</li>
        <li><a href="mailto:${manageremail}" class ="schoolrev">Email<span class="schooltext">${manageremail}</a></li>
        <li>Office # :${manageroffice}</li>
    </ul>
  </div>`
}
module.exports = makehtml;