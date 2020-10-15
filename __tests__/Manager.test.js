const { timeStamp } = require('console');
const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Dave', '1', 'p@p', '12');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('p@p');
    expect(manager.officeNumber).toBe('12');
})

test('getRole() returns "Manager"', () => {
    const manager = new Manager('Dave', '1', 'p@p', '12');

    expect(manager.getRole()).toEqual('Manager');
})