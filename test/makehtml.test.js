const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const makehtml = require("../utils/makehtml")

describe('Make HTML Function - generates html from array of team members', () => {
    describe('makehtml([]) should return No Team MeMbers message', () => {
        it("makehtml([]) should return message No Team Members", () => {
          // Arrange
          const testarray = [];
          const testresponse = "No Team Members";
          // Act and Assert
          expect(makehtml(testarray)).toEqual(testresponse)
        });
      });
    describe('managercard() used in makehtml() should produce word Manager in text html snippet', () => {
      it("makehtml([Manager only]) should have only Manager in htmlout text", () => {
        // Group Test checks that switch case 'Manager' is working and
        // managercard() is working and htmlout has been
        // assembled with front + cards + end html text
        const testarray = [new Manager('George McMurray',23,"gmcmurray1493@gmail.com",1)];
        const testhtml = makehtml(testarray)
        const regexMang = /<h4>Manager/;
        const regexEngineer = /<h4>Engineer/;
        const regexIntern = /<h4>Intern/;
        // Assert
        expect(regexMang.test(testhtml)).toBe(true)
        expect(regexEngineer.test(testhtml)).toBe(false)
        expect(regexIntern.test(testhtml)).toBe(false)

        });
    });
  
    describe('engineercard() used in makehtml() should produce word Engineer in text html snippet', () => {
        it("makehtml([Engineer only]) should have only Engineer in htmlout text", () => {
          // Group Test checks that switch case 'Engineer' is working and
          // engineerrcard() is working and htmlout has been
          // assembled with front + cards + end html text
          const testarray = [new Engineer('George McMurray',23,"gmcmurray1493@gmail.com","gmcmurray")];
          const testhtml = makehtml(testarray)
          const regexMang = /<h4>Manager/;
          const regexEngineer = /<h4>Engineer/;
          const regexIntern = /<h4>Intern/;
          // Assert
          expect(regexMang.test(testhtml)).toBe(false)
          expect(regexEngineer.test(testhtml)).toBe(true)
          expect(regexIntern.test(testhtml)).toBe(false)
  
         
        });
    });


          describe('interncard() used in makehtml() should produce word Intern in text html snippet', () => {
            it("makehtml([Intern only]) should have only Intern in htmlout text", () => {
              // Group Test checks that switch case 'Intern' is working and
              // interncard() is working and htmlout has been
              // assembled with front + cards + end html text
              const testarray = [new Intern('George McMurray',23,"gmcmurray1493@gmail.com","Berkeley")];
              const testhtml = makehtml(testarray)
              const regexMang = /<h4>Manager/;
              const regexEngineer = /<h4>Engineer/;
              const regexIntern = /<h4>Intern/;
              // Assert
              expect(regexMang.test(testhtml)).toBe(false)
              expect(regexEngineer.test(testhtml)).toBe(false)
              expect(regexIntern.test(testhtml)).toBe(true)
      
             
        });
    });


    });