const todos = require('../../models/todos');

module.exports = {
	getAll: (req, res) => {
		try {
			res.status(200).json({ data: todos, message: 'Get all data users' });
		} catch (error) {
			res.json(error);
		}
	}
};
