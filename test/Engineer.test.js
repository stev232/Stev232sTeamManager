const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer Object", () =>{
    it("should create an object with the name of James and an ID of 2 along with an email of james@joecorp.com and james2 as the github userName", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
            userName: 'james2',
        }
        jamesObject = new Engineer(james);
    
        expect(jamesObject.name).toEqual(james.name);
        expect(jamesObject.id).toEqual(james.id);
        expect(jamesObject.email).toEqual(james.email);
        expect(jamesObject.github).toEqual(james.userName);
    });

    it("should display Engineer as the role from getRole()", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
            userName: 'james2',
        }
        jamesObject = new Engineer(james);
        expect(jamesObject.role).toEqual("Engineer");
    });
});