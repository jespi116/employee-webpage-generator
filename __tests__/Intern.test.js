const Intern = require('../lib/Intern');

test('create a Intern object', () => {
    const intern = new Intern('Dave', '1', 'p@p', 'ucf');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('p@p');
    expect(intern.school).toBe('ucf');
});

test('getSchool() returns school name', () =>{
    const intern = new Intern('Dave', '1', 'p@p', 'ucf');

    expect(intern.getSchool()).toEqual('ucf');
});

test('getRole() returns "Intern"', () =>{
    const intern = new Intern('Dave', '1', 'p@p', 'ucf');

    expect(intern.getRole()).toEqual('Intern');
});