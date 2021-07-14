const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require("../lib/Manager")

describe('Manager Class Constructors', () => {
    describe('ManagerClassOfficenumber create', () => {
        it("Can set office number via constructor", () => {
          // Arrange
          const officenumber = 99;
          // Act
          const M = new Manager("Bud",11,"Bud@company.com", officenumber)
          // Assert
          expect(M.officenumber).toBe(officenumber)
        });
      });

    describe('Manager-getRole', () => {
      it("getRole() should return \"Manager\"", () => {
        // Arrange
        const testVal = "Manager";
        // Act
        const M = new Manager("Bud",11,"Bud@company.com", 99)
        // Assert
        expect(M.getRole()).toBe(testVal)
        });
    });
  
    describe('Manager-getOffice', () => {
      it("getOffice() should return office number", () => {
        const testVal = 99;
        const M = new Manager("Bud",11,"Bud@company.com", 99);
        expect(M.getOffice()).toBe(testVal)
      });
    });

    });