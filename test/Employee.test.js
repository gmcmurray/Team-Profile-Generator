const Employee = require('../lib/Employee');

describe('Employee Class Constructors', () => {
    describe('Employee create name and test getName', () => {
        it("Employee name ", () => {
          // Arrange
        const employeename = "Bubba"
          // Act
          const employee = new Employee(employeename,21,"Bud@company.com")
          // Assert
          expect(employee.getName()).toBe(employeename)
        });
      });

    describe('employee-getRole', () => {
      it("getRole() should return \"Employee\"", () => {
        // Arrange
        const testVal = "Employee";
        const employeename = "Bubba"
        const employee = new Employee(employeename,21,"Bud@company.com")
        // Assert
        expect(employee.getRole()).toBe(testVal)
        expect(employee.role).toBe(testVal)
        });
    });
    describe('employee-getID', () => {
        it("getID() should return ID number", () => {
          // Arrange
          const testVal = 21;
          const employeename = "Bubba"
          const employee = new Employee(employeename,testVal,"Bud@company.com")
          // Assert
          expect(employee.getId()).toBe(testVal)
          });
      });
      describe('employee-getEmail', () => {
        it("getEmail() should return email address", () => {
          // Arrange
          const testVal = "Bubba@some.com";
          const employeename = "Bubba"
          const employee = new Employee(employeename,21,testVal)
          // Assert
          expect(employee.getEmail()).toBe(testVal)
          });
      });

    });