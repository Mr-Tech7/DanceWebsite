// Searching data in mongoDB
// use singhKart

db.items.insertMany([{name: "Samsung 30s", ratings: 4.5, price: 4500}, {name: "Realme Narzo 20", ratings: 4, price: 5000}, {name: "iPhone", ratings: 3.5, price: 4000}])
// This query will return me all the objects who are rankHolder
db.items.find({rankHolder: true})

// insertOne() ---> Is used for iserting single data in mongoDB.
// insertMany() ---> Is used for iserting multiple data in mongoDB.

db.items.find({ratings: {$gt: 3.5}})

db.items.find({ratings: {$gt: 4.5}}, {name: "Samsung 30s"})

db.items.find({ratings: {$gt: 3.5},price: {$gt: 4000}})

db.items.find({
    $or: [{ratings: {$gt: 3.5}}, {price: {$gt:4000}}]
});

db.items.find({ratings: {$gte: 4}}, {ratings: 1, name: 1})


// Deleting items from mongo Database
db.items.deleteOne({name: "Samsung 30s"})
db.items.deleteOne({name: "Realme Narzo 20"})

// deleteOne() ---> It will delete the matching entry and will delete the first entry in case of multiple document match in mongoDB.
// deleteMany() ---> It will delete all the matching entry in mongoDB.