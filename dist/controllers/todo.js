"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = { id: Math.random().toString(), text };
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo created!', newTodo });
};
exports.createTodo = createTodo;
