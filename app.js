const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const port = 5000;

const app = express();

// Connect to Mongoose
mongoose.connect('mongodb://localhost/crud-demo', {
	useNewUrlParser: true 
}).then(() => {
	console.log('MongoDB connected.')
}).catch((err) => {
	console.log(err)
});

// Load recipe model
require('./models/Recipe');
const Recipe = mongoose.model('recipes');

// Handlebars middleware
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index route
app.get('/', (req, res) => {
	const title = 'Welcome!!';
	res.render('index', {
		title: title
	});
});

// About route
app.get('/about', (req, res) => {
	res.render('about');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});

