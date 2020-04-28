const todos = require('../../models/todos');

module.exports = {
	getAll: (req, res) => {
		try {
			res.status(200).json({ data: todos, message: 'Get all data users' });
		} catch (error) {
			res.json(error);
		}
	},
	addTodo: (req, res) => {
		try {
			const { todo, userId } = req.body;
			const newTodo = {
				id: todos.length + 1,
				userId,
				todo
			};
			todos.push(newTodo);
			res.status(200).json({ message: 'Create new data successfully', data: todos });
		} catch (error) {
			res.json(error);
		}
	},
	editTodo: (req, res) => {
		try {
			const id = req.params.id;
			const { todo, userId } = req.body;

			const editTodo = {
				id: Number(id),
				userId: Number(userId),
				todo
			};

			todos.splice(id - 1, 1, editTodo);

			res.status(200).json({ message: 'User is successfully change', data: todos });
		} catch (error) {
			res.json(error);
		}
	},
	deleteTodo: (req, res) => {
		try {
			const id = req.params.id;
			todos.splice(id - 1, 1);
			res.status(200).json({ message: `Todo ${id} is successfully deleted`, data: todos });
		} catch (error) {
			res.json(error);
		}
	},
	findById: (req, res) => {
		try {
			const id = req.params.id;
			const filteredTodos = todos.filter((element) => {
				return element.id === Number(id);
			});
			res.status(200).json({ message: 'Todos data filtered by Id', data: filteredTodos });
		} catch (error) {
			res.json(error);
		}
	},
	findByUserId: (req, res) => {
		try {
			const userId = req.params.userId;
			console.log(userId);

			const filteredTodos = todos.filter((element) => {
				return element.userId === Number(userId);
			});
			res.status(200).json({ message: 'Todos data filtered by user id', data: filteredTodos });
		} catch (error) {
			res.json(error);
		}
	}
};
