const Inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateWebpage = require('./src/page-template');
const inquirer = require('inquirer');

const employees = [];
const idArr = [];

function prompts(){

    function managerPrompt() {
        console.log(`=====================================================================
            Welcome to the Employee Webpage Generator!

Please fill out the prompts to display the corresponding information!
=====================================================================`)
        Inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Manager'
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Manager's ID number"
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Manager's email address"
                },
                {
                    type:'input',
                    name:'officeNum',
                    message:"Enter your Manager's office number"
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
        Inquirer
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
                            message: 'Please choose which type of employee you will be adding.'
                        })
                        .then(({type}) => {
                            if (type === 'Engineer'){
                                engPrompt()
                            } else {
                                intPrompt()
                            }
                        })
                } else {
                    console.log('false')
                }
            })
        };

    function engPrompt() {
        Inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Engineer'
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Engineer's ID number"
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Engineer's email address"
                },
                {
                    type:'input',
                    name:'github',
                    message:"Enter your Engineer's GitHub Username"
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
        Inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'Enter the name of your Intern'
                },
                {
                    type:'input',
                    name:'id',
                    message:"Enter your Intern's ID number"
                },
                {
                    type:'input',
                    name:'email',
                    message:"Enter your Intern's email address"
                },
                {
                    type:'input',
                    name:'school',
                    message:"Enter the name of your Intern's school"
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

prompts();