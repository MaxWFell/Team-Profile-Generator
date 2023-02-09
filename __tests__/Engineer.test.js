const { test, expect } = require('@jest/globals');
const Engineer = require('../libs/Engineer');

test('gets Engineer GitHub username', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        username: 'Max'
    };
    const engineer = new Engineer(data);

    expect(engineer.username).toBe('Max');
});

test('gets Engineer role', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        username: 'Max'
    };
    const engineer = new Engineer(data);

    expect(engineer.role).toBe('Engineer');
});