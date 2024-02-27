const Book = require('./models/book');

async function readBooks(request, response) {
	try{
	const books = await Book.find({email: request.user.email});
	response.send(books)
	} catch(error) {
		console.error(error);
		response.status(500).send('Unable to find Books')
	}
}

async function createBooks(request, response) {
	try {
		const newBook = await Book.create({...request.body, email: request.user.email});
		response.send(newBook);
	} catch(error) {
		console.error(error);
		response.status(500).send('Error creating new Book');
	}
}

async function deleteBooks(request, response) {
	const id = request.params.id;

	try {
		await Book.findOneAndDelete({ _id: id, email: request.user.email });
		response.status(204).send('successfully deleted');
	} catch(error) {
		console.error(error)
		response.status(404).send(`Unable to delete book with id ${id}`);
	}
}

async function updateBooks(request, response) {
	const id = request.params.id;

	try{
		await Book.findOneAndUpdate({ _id: id, email: request.user.email }, request.body, {new: true});
		response.status(200).send('successfully updated');
	} catch (error) {
		console.error(error);
		response.status(500).send(`Unable to update book with id ${id}`);
	}
}

module.exports = { readBooks, createBooks, deleteBooks, updateBooks};