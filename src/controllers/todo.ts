import { RequestHandler } from 'express';
import Todo from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = { id: Math.random().toString(), text };
	TODOS.push(newTodo);

	res.status(201).json({ message: 'Todo created!', newTodo });
};
