/* 
* name
* id
* email
*
* getName()
* getId()
* getEmail()
* getRole() // Returns 'Employee'
*/

class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
        this.role = this.getRole();
    }

    getName(name) {
        return name;
    }

    getId(id) {
        return id;
    }

    getEmail(email) {
        return email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;