const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const articleSeed = [
	{
		title: 'first article',
		notes: 'this is the first article',
		date: new Date(Date.now()),
	},
	{
		title: 'second article',
		date: new Date(Date.now()),
	},
	{
        title: 'third article',
        notes: 'this is the third article',
		date: new Date(Date.now()),
	},
];