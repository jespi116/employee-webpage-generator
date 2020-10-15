const Engineer = require('../lib/Engineer');

test('create a Engineer object', () => {
    const engineer = new Engineer('Dave', '1', 'p@p', 'jespi116');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('p@p');
    expect(engineer.github).toBe('jespi116');
});

test('getGithub() returns github username', () =>{
    const engineer = new Engineer('Dave', '1', 'p@p', 'jespi116');

    expect(engineer.getGithub()).toEqual('jespi116');
})

test('getRole() returns "Engineer"', () => {
    const engineer = new Engineer('Dave', '1', 'p@p', '12');

    expect(engineer.getRole()).toEqual('Engineer');
})