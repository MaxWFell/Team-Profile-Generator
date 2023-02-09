const { test, expect } = require('@jest/globals');
const Employee = require('../libs/Employee');

test('creates a Employee object', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('gets Employee name', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.name).toBe('Max');
});

test('gets Employee ID', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.id).toEqual(1);
});

test('gets Employee email', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.email).toBe('Max@gmail.com');
});

test('gets Employee role', () => {
    const data = {
        name: "Max",
        id: 1,
        email: "Max@gmail.com",
        officeNumber: 1
    };
    const employee = new Employee(data);

    expect(employee.role).toBe('Employee');
});