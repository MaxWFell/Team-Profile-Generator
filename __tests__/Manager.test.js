const { test, expect } = require('@jest/globals');
const Manager = require('../libs/Manager');


test('gets Manager office number', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "MaxFell@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.officeNumber).toEqual(1);
});

test('gets Manager role', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "MaxFellgmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.role).toBe('Manager');
});