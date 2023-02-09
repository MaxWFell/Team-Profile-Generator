// Gvariables
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./libs/employee');
const Manager = require('./libs/manager');
const Engineer = require('./libs/engineer');
const Intern = require('./libs/intern');
const generatePage = require('./src/source');
const writeFile = require('./src/Generate');
const employeeList = [];

// Starts questioneer!
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Managers name?',
        validate: nameInput => {
            if (nameInput) {return true;} else {console.log('Enter managers name.');
            return false;}
        }
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Managers email?',
        validate: emailInput => {
            if (emailInput) {return true;} else {console.log('Enter your managers email.');
            return false;}
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Manager ID?',
        validate: (idInput) => {
            if (isNaN(idInput)) { return "Please enter a valid ID.";}
            return true;
        },
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Managers Office number?',
        validate: (officeNumberInput) => {
            if (isNaN(officeNumberInput)) {return "Please enter a valid office number.";}
            return true;
        },
    }
];

// ask what next step would be after adding Manager information
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextStep',
            message: 'Choose from the options below.',
            choices: [
                "Add an engineer.",
                "Add an intern.",
                "Finish building the team."
            ]

        }
    ])
    .then(data => {
        // go to next step depending on what the user input is
        switch (data.nextStep) {
            case 'Add an engineer.':
                addEngineer();
                break;
            case 'Add an intern.':
                addIntern();
                break;
            case 'Finish building the team.':
                const pageHtml = generatePage(employeeList);
                writeFile(pageHtml);
                break;
        }
    }) 
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Interns name?',
            validate: nameInput => {if (nameInput) {return true;  } else { console.log('What is your interns name?');
            return false; }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Interns ID?',
            validate: (idInput) => {if (isNaN(idInput)) {return "Please enter a valid ID."; }
            return true; },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Interns email',
            validate: emailInput => {if (emailInput) {return true;} else {console.log('Enter interns email.');
            return false; }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does your intern attend?",
            validate: schoolInput => {if (schoolInput) {return true; } else {console.log('Interns schooling.'); 
            return false;}
            }
        }
    ])
    .then(data => {
        const teamMember = new Intern(data);
        console.log(data);
        console.log(teamMember.role);
        employeeList.push(teamMember);
        console.log(employeeList);
        addEmployee();
    })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineers Name?',
            validate: nameInput => {if (nameInput) { return true;} else {console.log('Engineers name'); 
            return false;}
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer ID?',
            validate: (idInput) => {if (isNaN(idInput)) {return "Please enter a valid ID.";}
            return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineers email?',
            validate: emailInput => {if (emailInput) {
            return true; } else {console.log('Engineers email.'); return false; }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: "Engineers GitHub username-",
            validate: usernameInput => {if (usernameInput) {return true;} else {
            console.log('engineers github username.'); return false; }
            }
        }
    ])
    .then(data => {
        const teamMember = new Engineer(data);
        console.log(data);
        console.log(teamMember.role);
        employeeList.push(teamMember);
        console.log(employeeList);
        addEmployee();
    })
};

// function to initialize app
function init() {
    return inquirer.prompt(managerQuestions);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        const managerEntry = data;
        console.log(data);
        employeeList.push(managerEntry);
        console.log(employeeList);
    })
    .then(addEmployee)
    .catch(err => {
        console.log(err);
    });