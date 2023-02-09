/*
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
*/
const fs = require('fs');
const filePath = './dist/';
const htmlFile = 'index.html';
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employee = [];
let count = 1;

const manager = {
    name: '',
    id: '',
    email: '',
    officeNum: '',
};

// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const engineer = {
    name: '',
    id: '',
    email: '',
    userName: '',
}

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const intern = {
    name: '',
    id: '',
    email: '',
    school: '',
}

function init() {
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    inquirer
        .prompt([
            {
                type: 'input',
                message: `Enter the Team Manager's name: `,
                name: 'managerName',
            },
            {
                type: 'input',
                message: `Enter the Team Manager's ID: `,
                name: 'managerID',
            },
            {
                type: 'input',
                message: `Enter the Team Manager's email: `,
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: `Enter the Team Manager's office number: `,
                name: 'managerOfficeNum',
            },
        ])
        .then((response) => {
            manager.name = response.managerName;
            manager.id = response.managerID;
            manager.email = response.managerEmail;
            manager.officeNum = response.managerOfficeNum;

            employee[0] = new Manager(manager);
            menu();
        });    
}

function menu() {
    console.log('\n');
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Would you like to add an "Engineer", "Intern", or "finish": ',
                name: 'selection',
            },
        ])
        .then((menu) => {
            switch(menu.selection.toLowerCase()) {
            case 'engineer':
                populateEngineer();
                break;
            case 'intern':
                populateIntern();
                break;
            case 'finish':
                generatePage();
                break;
            default:
                console.log(`${ menu.selection } is an invalid option. Try again!`);
                repeat();
                break;
            }
        });
}

// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
function populateEngineer() {           
    inquirer
        .prompt([
            {
                type: 'input',
                message: `Enter the Engineer's name: `,
                name: 'engineerName',
            },
            {
                type: 'input',
                message: `Enter the Engineer's ID: `,
                name: 'engineerID',
            },
            {
                type: 'input',
                message: `Enter the Engineer's email: `,
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: `Enter the Engineer GitHub UserName: `,
                name: 'engineerUserName',
            },
        ])
        .then((response) => {
            engineer.name = response.engineerName;
            engineer.id = response.engineerID;
            engineer.email = response.engineerEmail;
            engineer.userName = response.engineerUserName;
            
            employee[count] = new Engineer(engineer);
            count++
            menu();
        });
}

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
function populateIntern() {         
    inquirer
        .prompt([
            {
                type: 'input',
                message: `Enter the Intern's name: `,
                name: 'internName',
            },
            {
                type: 'input',
                message: `Enter the Intern's ID: `,
                name: 'internID',
            },
            {
                type: 'input',
                message: `Enter the Intern's email: `,
                name: 'internEmail',
            },
            {
                type: 'input',
                message: `Enter the Intern's school: `,
                name: 'internSchool',
            },
        ])
        .then((response) => {
            intern.name = response.internName;
            intern.id = response.internID;
            intern.email = response.internEmail;
            intern.school = response.internSchool;
            
            employee[count] = new Intern(intern);
            count++
            menu();
        });
}

function repeat() {
    menu();
}

function generatePage() {
    let html = `
<!DOCTYPE html>
<html lang="en-US">

    <head>
        <meta charset="UTF-8">
        <title>Team Manager</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>

    <body class='m-0 p-0 bg-secondary'>
        <header class='d-flex justify-content-center col-12 mt-3'>
            <section class='d-flex justify-content-center bg-danger text-light col-11 m-0 p-3'>
                <p class='h1 align-self-center'>My Team</p>
            </section>
        </header>
        <section class='row w-100 d-flex justify-content-center mt-3'>
            <section class='column col-1'>
            </section>
            <section class='row justify-content-center'>
`;
    for(let i = 0; i < count; i++) {
        html = html.concat(`
                <section class='col-5 col-sm-4 col-md-3 col-lg-2 bg-primary text-light border border-2 border-dark p-2 m-1'>
                    <p class='h2'>${ employee[i].name }</p>
                    <p class='h2'>${ employee[i].role }</p>
                    <section class='bg-light text-dark border border-2 border-dark p-2 m-0'>
                        ID: ${ employee[i].id }</br>
                        Email: ${ employee[i].email }</br> `);
        if(employee[i].role == 'Manager') {     
            html = html.concat(
                        `Office number: ${ employee[i].officeNum }</br>`);
        } else if(employee[i].role == 'Engineer') {     
            html = html.concat(
                        `Github: ${ employee[i].github }</br>`);
        } else if(employee[i].role == 'Intern') {     
            html = html.concat(
                        `Office School: ${ employee[i].school }</br>`);
        }
    }

    html = html.concat(`
                        </section>
                    </section>
                </section>
                <section class='column col-1'>
                </section>
            </section>        
        </section>
    </body>
</html>`);
    
    fs.mkdir(filePath, { recursive: true }, (errFolder) => {
        if(errFolder) {
            console.error(errFolder);
        } else {
            fs.writeFile(filePath + htmlFile, html, (errFile) => {
                if(errFile) {
                    console.error(errFile);
                } else {
                    console.log('File has been created');
                }
            });
        }
    });
}

init();