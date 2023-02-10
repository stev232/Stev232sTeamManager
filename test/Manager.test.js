const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager Object", () =>{
    it("should create an object with the name of James and an ID of 2 along with an email of james@joecorp.com and 123 as the office number", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
            officeNum: '123',
        }
        jamesObject = new Manager(james)
    
        expect(jamesObject.name).toEqual(james.name);
    });
});