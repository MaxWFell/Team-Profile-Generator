const { test, expect } = require('@jest/globals');
const Intern = require('../libs/Intern');

test('gets Intern school', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "MaxFell@gmail.com",
        school: 'UCF BOOTCAMP'
    };
    const intern = new Intern(data);

    expect(intern.school).toBe('UCF BOOTCAMP');
});

test('gets Intern role', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "MaxFell@gmail.com",
        school: 'UCF BOOTCAMP '
    };
    const intern = new Intern(data);

    expect(intern.role).toBe('Intern');
});