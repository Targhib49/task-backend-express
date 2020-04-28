const express = require('express');
const app = express();
const { PORT } = require('./config');

// app.get('/', (req, res) => {
// 	const isUser = true;
// 	if (isUser) {
// 		res.send('hello to my API');
// 	} else {
// 		res.redirect(302, '/miftah');
// 	}
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));

app.post('/', (req, res) => {
	res.send('coba posting');
});

app.listen(PORT, () => {
	console.log(`PORT is listen on PORT: ${PORT}`);
});
