const express = require('express');
const app = express();
const { PORT } = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));

app.listen(PORT, () => {
	console.log(`PORT is listen on PORT: ${PORT}`);
});
