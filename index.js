const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const composeWebpage = require('./src/page-template');
const writePage = require('./utils/writePage');

const employees = [];
const idArr = [];

function prompts(){

    function managerPrompt() {
        console.log(`=====================================================================
            Welcome to the Employee Webpage Generator!

Please fill out the prompts to display the corresponding information!
=====================================================================`)
        inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Manager:',
                    validate: name => {
                        if (name){
                            return true;
                        } else {
                            console.log("Please enter your Manager's name.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Manager's ID number:",
                    validate: id => {
                        if (id){
                            return true;
                        } else {
                            console.log("Please enter your Manager's ID number.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Manager's email address:",
                    validate: email => {
                        if (email){
                            return true;
                        } else {
                            console.log("Please enter your Manager's email address.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'officeNum',
                    message:"Enter your Manager's office number:",
                    validate: officeNum => {
                        if (officeNum){
                            return true;
                        } else {
                            console.log("Please enter your Manager's office number.");
                            return false;
                        }
                    }
                }
            ])
            .then(({name, id, email, officeNum}) => {
                this.manager = new Manager(name, id, email, officeNum);
                employees.push(this.manager);
                idArr.push(this.manager.id);
                console.log(this.manager);
                addPrompt();
            })
    };

    function addPrompt() {
        inquirer
            .prompt({
                    name:'addEmp',
                    type:'confirm',
                    message:'would you like to add another employee?',
                    default: false
                })
            .then(({addEmp}) => {
                
                if(addEmp){
                    inquirer
                        .prompt({
                            name:'type',
                            type:'list',
                            choices: ['Engineer', 'Intern'],
                            message: 'Please choose which type of employee you will be adding:'
                        })
                        .then(({type}) => {
                            if (type === 'Engineer'){
                                engPrompt()
                            } else {
                                intPrompt()
                            }
                        })
                } else {
                    writePage(composeWebpage(employees))
                        .then(writeResponse => {
                            console.log(writeResponse.message);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
        };

    function engPrompt() {
        inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Engineer:',
                    validate: name => {
                        if (name){
                            return true;
                        } else {
                            console.log("Please enter your Engineer's name.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Engineer's ID number:",
                    validate: id => {
                        if (id){
                            return true;
                        } else {
                            console.log("Please enter your Engineer's ID.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Engineer's email address:",
                    validate: email => {
                        if (email){
                            return true;
                        } else {
                            console.log("Please enter your Engineer's email address.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'github',
                    message:"Enter your Engineer's GitHub Username:",
                    validate: github => {
                        if (github){
                            return true;
                        } else {
                            console.log("Please enter your Engineer's GitHub Username.");
                            return false;
                        }
                    }
                }
            ])
            .then(({name, id, email, github}) => {
                this.engineer = new Engineer(name, id, email, github);
                employees.push(this.engineer);
                idArr.push(this.engineer.id);
                console.log(this.engineer);
                addPrompt();
            })
    };

    function intPrompt() {
        inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Intern:',
                    validate: name => {
                        if (name){
                            return true;
                        } else {
                            console.log("Please enter your Intern's name.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Intern's ID number:",
                    validate: id => {
                        if (id){
                            return true;
                        } else {
                            console.log("Please enter your Intern's ID number.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Intern's email address:",
                    validate: email => {
                        if (email){
                            return true;
                        } else {
                            console.log("Please enter your Intern's email address.");
                            return false;
                        }
                    }
                },
                {
                    type:'input',
                    name:'school',
                    message:"Enter the name of your Intern's school:",
                    validate: school => {
                        if (school){
                            return true;
                        } else {
                            console.log("Please enter the nsme of your Intern's school.");
                            return false;
                        }
                    }
                }
            ])
            .then(({name, id, email, school}) => {
                this.intern = new Intern(name, id, email, school);
                employees.push(this.intern);
                idArr.push(this.intern.id);
                console.log(this.intern);
                addPrompt();
            })
    }

managerPrompt();

}



prompts()
    