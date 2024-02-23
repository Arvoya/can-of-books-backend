const Book = require('./models/book');

async function readBooks(request, response) {
	try{
	const books = await Book.find({});
	response.send(books)
	} catch(error) {
		console.error(error);
		response.status(500).send('Unable to find Books')
	}
}

async function createBooks(request, response) {
	try {
		const newBook = await Book.create(request.body);
		response.send(newBook);
	} catch(error) {
		console.error(error);
		response.status(500).send('Error creating new Book');
	}
}

async function deleteBooks(request, response) {
	const id = request.params.id;

	try {
		response.status(204).send('successfully deleted');
		await Book.findByIdAndDelete(id);

	} catch(error) {
		console.error(error)
		response.status(404).send(`Unable to delete book with id ${id}`);
	}
}

module.exports = { readBooks, createBooks, deleteBooks};