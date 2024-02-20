require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONN);

const Book = require('./models/book');

async function clear() {
	try {
		await Book.deleteMany({});
		console.log('Books cleared');
	} catch (err) {
		console.error(err);
	} finally {
		mongoose.disconnect();
	}


}

clear();

