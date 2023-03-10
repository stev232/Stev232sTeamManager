const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern Object", () =>{
    it("should create an object with the name of James and an ID of 2 along with an email of james@joecorp.com and University as the school", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
            school: 'University',
        }
        jamesObject = new Intern(james);
    
        expect(jamesObject.name).toEqual(james.name);
        expect(jamesObject.id).toEqual(james.id);
        expect(jamesObject.email).toEqual(james.email);
        expect(jamesObject.school).toEqual(james.school);
    });

    it("should display Intern as the role from getRole()", () => {
        const james = {
            name: 'James',
            id: 2,
            email: 'james@joecorp.com',
            school: 'University',
        }
        jamesObject = new Intern(james);
        expect(jamesObject.role).toEqual("Intern");
    });
});