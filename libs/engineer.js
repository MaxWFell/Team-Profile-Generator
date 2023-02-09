const { ModernFakeTimers } = require('@jest/fake-timers');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

        this.role = 'Engineer';
    }

    getUsername() {
        return this.username;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Engineer;