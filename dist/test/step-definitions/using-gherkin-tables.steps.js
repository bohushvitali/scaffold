"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const todo_list_1 = require("../../src/todo-list");
const feature = jest_cucumber_1.loadFeature('./test/features/using-gherkin-tables.feature');
jest_cucumber_1.defineFeature(feature, (test) => {
    let todoList;
    beforeEach(() => {
        todoList = new todo_list_1.TodoList();
    });
    test('Adding an item to my todo list', ({ given, when, then }) => {
        given('my todo list currently looks as follows:', (table) => {
            table.forEach((row) => {
                todoList.add({
                    name: row.TaskName,
                    priority: row.Priority,
                });
            });
        });
        when('I add the following task:', (table) => {
            todoList.add({
                name: table[0].TaskName,
                priority: table[0].Priority,
            });
        });
        then('I should see the following todo list:', (table) => {
            expect(todoList.items.length).toBe(table.length);
            table.forEach((row, index) => {
                expect(todoList.items[index].name).toBe(table[index].TaskName);
                expect(todoList.items[index].priority).toBe(table[index].Priority);
            });
        });
    });
});
//# sourceMappingURL=using-gherkin-tables.steps.js.map