require('dotenv').config();
const mongoose = require('mongoose');

const Book = require('./models/book');

mongoose.connect(process.env.MONGODB_CONN);
async function seed() {
	const myBook = new Book({
		title: 'Dune - Frank Herbert',
		description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.',
		status: true
	})
	myBook.save();

	await Book.create({
		title: 'Norse Mythology - Neil Gaiman',
		description: 'In Norse Mythology, Gaiman stays true to the myths in envisioning the major Norse pantheon: Odin, the highest of the high, wise, daring, and cunning; Thor, Odin’s son, incredibly strong yet not the wisest of gods; and Loki―son of a giant―blood brother to Odin and a trickster and unsurpassable manipulator.\n' +
			'\n' +
			'Gaiman fashions these primeval stories into a novelistic arc that begins with the genesis of the legendary nine worlds and delves into the exploits of deities, dwarfs, and giants. Once, when Thor’s hammer is stolen, Thor must disguise himself as a woman―difficult with his beard and huge appetite―to steal it back.',
		status: true
	})

	console.log('Mongoose db has been seeded');

	mongoose.disconnect()
}

seed();