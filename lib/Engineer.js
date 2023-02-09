/*
* github /GitHub UserName/
* getGithub()
* getRole() Overridden to return 'Engineer'
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data) {
        super(data);
        this.github = data.userName;
        this.role = this.getRole();
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;