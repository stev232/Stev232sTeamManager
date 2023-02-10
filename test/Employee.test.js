const Employee = require('../lib/Employee');

describe("Employee Object", () =>{
    it("should create an object with the name of James and an ID of 2 along with an email of james@joecorp.com and james2 as the github userName", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
        }
        jamesObject = new Employee(james);
    
        expect(jamesObject.name).toEqual(james.name);
        expect(jamesObject.id).toEqual(james.id);
        expect(jamesObject.email).toEqual(james.email);
    });

    it("should display Employee as the role from getRole()", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
        }
        jamesObject = new Employee(james);
        expect(jamesObject.role).toEqual("Employee");
    });
});