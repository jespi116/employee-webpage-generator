const generateCards = employees => {

    const generateManCard = manager => {
        return `
                <section class='card mx-3 my-3 cardy'>
                    <div class='card-header bg-primary text-white'>
                        <h2 class='card-title'>${manager.getName()}</h2>
                        <h3 class='card-title'><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
                    </div>
                    <div class='card-body card-bg'>
                        <ul class='list-group'>
                            <li class='list-group-item'>Employee ID: ${manager.getId()}</li>
                            <li class='list-group-item'>Email: <a href='mailto:${manager.getEmail()}}'>${manager.getEmail()}</a></li>
                            <li class='list-group-item'>Office Number: ${manager.getOfficeNum()}</li>
                        </ul>
                    </div>
                </section>
                `
    };
    
    const generateEngCard = engineer => {
        return `
                <section class='card mx-3 my-3 cardy'>
                    <div class='card-header bg-primary text-white'>
                        <h2 class='card-title'>${engineer.getName()}</h2>
                        <h3 class='card-title'><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
                    </div>
                    <div class='card-body card-bg'>
                        <ul class='list-group'>
                            <li class='list-group-item'>Employee ID: ${engineer.getId()}</li>
                            <li class='list-group-item'>Email: <a href='mailto:${engineer.getEmail()}}'>${engineer.getEmail()}</a></li>
                            <li class='list-group-item'>GitHub Profile: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </section>
                `
    };

    const generateIntCard = intern => {
        return `
                <section class='card mx-3 my-3 cardy'>
                    <div class='card-header bg-primary text-white'>
                        <h2 class='card-title'>${intern.getName()}</h2>
                        <h3 class='card-title'><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
                    </div>
                    <div class='card-body card-bg'>
                        <ul class='list-group'>
                            <li class='list-group-item'>Employee ID: ${intern.getId()}</li>
                            <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}}'>${intern.getEmail()}</a></li>
                            <li class='list-group-item'>School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </section>
                `
    };

    const webpage = [];

    webpage.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManCard(manager))
    );

    webpage.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngCard(engineer))
        .join("")
    );

    webpage.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntCard(intern))
        .join("")
    );

    return webpage.join("");

};

module.exports = employees => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Employee List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel='stylesheet' href='./style.css'>
    <script src="https://kit.fontawesome.com/c12e06f1eb.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-12 jumbotron mb-3 bg-danger'>
                <h1 class='text-center text-white'>My Team</h1>
            </div>
        </div>
    </div>
    <div class='container cards'>
        <div class='row d-flex justify-content-center'>
            <div class='col-12 d-flex flex-wrap justify-content-center'>
                ${generateCards(employees)}
            </div>
        </div>
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>
`
};