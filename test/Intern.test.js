const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern Class Constructors', () => {
    describe('Intern get School create', () => {
        it("Intern-getSchool", () => {
          // Arrange
        const schoolid = "StateUniversity"
          // Act
          const intern = new Intern("Bud",21,"Bud@company.com", schoolid)
          // Assert
          expect(intern.getSchool()).toBe(schoolid)
        });
      });

    describe('Intern-getRole', () => {
      it("getRole() should return \"Intern\"", () => {
        // Arrange
        const testVal = "Intern";
        // Act
        const intern = new Intern("Bud",21,"Bud@company.com", "StateUniversity")
        console.log(intern)
        // Assert
        expect(intern.getRole()).toBe(testVal)
        expect(intern.role).toBe(testVal)
        });
    });
    

    });