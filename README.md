
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team Profile Generator 

## Table of Contents
1. [Description](#descrip) 
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Contributing](#contri)
6. [Tests](#test)
7. [Mocks](#mocks)
8. [Questions](#quest)

---------------------------------------
## 1. Description <a id="descrip"> </a>
Server application using CLI inquirer module to collect a data on team members and creates a html output file which displays team members and Manager.  Uses OOP technique in creating Employee class which is extended to create objects : Manager, Intern and 
Engineer subclasses.  

Inquirer API uses inquirer.prompt().then() methods.  A recursive function askmenu()
provides looping of questions when building 
team of Interns and Engineers.

----------------------------------------------

## 2. Installation <a id="install"></a>
Installation Instructions: 

In command line of terminal : 1) run npm i  2) run node index.js or npm start

Files used in API found : https://github.com/gmcmurray/Team-Profile-Generator 

API deployed here : not applicable

-------------------------------------------------

## 3. Usage <a id="usage"></a>
The API is target to be used:
For managers that would like to create a team profile of their engineers and interns.

-----------------------------------------------------

## 4. License <a id="lic"></a>

License covering API:
MIT License
    Copyright (c) <2021> <George McMurray>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

----------------------------------------------

## 5. Contributing <a id="contri"></a>
George McMurray

-------------------------------------------------

## 6. Tests <a id="test"></a>
The following tests were conducted on the API:
Jest API tests have been created in test subdirectory for each of the object classes and sub classes - Employee Class, Engineer SubClass, Intern SubClass, Manager SubClass.  In addition test on makehtml() function and fileIO functions have also been setup.  Not tested directly are the inquirer.prompt().then() functions found in questions.js.  Inquirer prompts for email and numbers are checked during CLI activity.

----------------------------------------------------------------


## 7.  Mock <a id="mock"></a>
The following animation demonstrates the application functionality:
![user responds to command line questions to generate a ReadMe.md file](./utils/TeamGenerator.gif)



--------------------------------
## 8.  Questions <a id="quest"></a>
For any questions you can email me at:
gmcmurray1493@gmail.com

My github username is gmcmurray

---------------------------------
