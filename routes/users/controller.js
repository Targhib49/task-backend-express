const users = require('../../models/users');

module.exports = {
	getAll: (req, res) => {
		try {
			res.status(200).json({ data: users, message: 'Get all data users' });
		} catch (error) {
			res.json(error);
		}
	},
	addUser: (req, res) => {
		try {
			const { name, address } = req.body;
			const newUser = {
				id: users.length + 1,
				name,
				address
			};

			users.push(newUser);

			res.status(200).json({ message: 'Create new data successfully', data: users });
		} catch (error) {
			res.json(error);
		}
	},
	editUser: (req, res) => {
		try {
			const id = req.params.id;
			const { name, address } = req.body;

			const editUser = {
				id: Number(id),
				name,
				address
			};

			users.splice(id - 1, 1, editUser);

			res.status(200).json({ message: 'User is successfully change', data: users });
		} catch (error) {
			res.json(error);
		}
	},
	filterByAddress: (req, res) => {
		const address = req.query.address;

		const filteredUser = users.filter((element) => {
			return element.address.toLowerCase() === address.toLowerCase();
		});

		res.status(200).json({ message: 'User data filtered by address', data: filteredUser });
	},
	findById: (req, res) => {
		const id = req.query.id;

		const filteredUser = users.filter((element) => {
			return element.id === Number(id);
		});

		res.status(200).json({ message: 'User data filtered by Id', data: filteredUser });
	},
	deleteAll: (req, res) => {
		try {
			res.status(200).json({ message: `All users are successfully deleted`, data: [] });
		} catch (error) {
			res.json(error);
		}
	},
	deleteById: (req, res) => {
		try {
			const id = req.params.id;
			const { name, address } = req.body;

			users.splice(id - 1, 1);

			res.status(200).json({ message: `User ${id} is successfully deleted`, data: users });
		} catch (error) {
			res.json(error);
		}
	}
};
