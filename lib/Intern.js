/*
* school
* getSchool()
* getRole() //Overridden to return 'Intern'
*/

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school = data.school;
        this.role = this.getRole();
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;