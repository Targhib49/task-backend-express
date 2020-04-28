const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello to my first API' });
});

// router.get('/', (req, res) => console.log('GET'));
// router.get('/1', (req, res) => console.log('GET ONE'));
// router.post('/', (req, res) => console.log('POST'));
// router.put('/', (req, res) => console.log('UPDATE'));
// router.put('/1', (req, res) => console.log('UPDATE ONE'));
// router.delete('/', (req, res) => console.log('DELETE'));
// router.delete('/1', (req, res) => console.log('DELETE ONE'));
// router.patch('/', (req, res) => console.log('PATCH'));
// router.patch('/1', (req, res) => console.log('PATCH ONE'));

module.exports = router;
