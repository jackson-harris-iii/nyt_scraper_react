const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/articles"
);

const articleSeed = [
	{
        title: 'first article',
        url: 'https://www.nytimes.com/2017/10/08/us/mcdonalds-szechuan-sauce.html',
		notes: 'this is the first article',
		date: new Date(Date.now()),
	},
	{
        title: 'second article',
        url:'https://www.nytimes.com/2018/05/17/arts/television/rick-and-morty.html',
		date: new Date(Date.now()),
	},
	{
        title: 'third article',
        url:'https://www.nytimes.com/2018/05/10/arts/television/rick-and-morty-70-new-episodes.html',
        notes: 'this is the third article',
		date: new Date(Date.now()),
	},
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });