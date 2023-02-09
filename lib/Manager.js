/*
* officeNumber
* getRole() Overridden to return 'Manager'
*/
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data) {
        super(data);
        this.officeNum = data.officeNum;
        this.role = this.getRole();
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;