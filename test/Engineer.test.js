const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer Class Constructors', () => {
    describe('Engineer github create', () => {
        it("Engineer-getGitHubID", () => {
          // Arrange
        const githubid = "Budgithub"
          // Act
          const Eng = new Engineer("Bud",11,"Bud@company.com", githubid)
          // Assert
          expect(Eng.getGitHubID()).toBe(githubid)
        });
      });

    describe('Engineer-getRole', () => {
      it("getRole() should return \"Engineer\"", () => {
        // Arrange
        const testVal = "Engineer";
        // Act
        const Eng = new Engineer("Bud",11,"Bud@company.com", "Budgithub")
        // Assert
        expect(Eng.getRole()).toBe(testVal)
        });
    });

    });