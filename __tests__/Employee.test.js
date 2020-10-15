const Employee = require('../lib/Employee');

test('create a employee object', () => {
    const employee = new Employee('Dave', '1', 'p@p');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('p@p');
});

test('getName() returns employee name', () => {
    const employee = new Employee('Dave', '1', 'p@p');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('getId() returns  employee Id', () => {
    const employee = new Employee('Dave', '1', 'p@p');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})


test('getEmail() returns employee email', () => {
    const employee = new Employee('Dave', '1', 'p@p');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('getRole() returns "Employee"', () => {
    const employee = new Employee('Dave', '1', 'p@p');

    expect(employee.getRole()).toEqual('Employee');
})