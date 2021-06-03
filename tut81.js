// Inserting Data in mongo

// use singhkart
db.items.insertOne({
    name: "Aries",
    price: 100000000,
    rating: 9.8,
    qty: 5000,
    sold: 4000
})

db.items.insertMany([{name: "vaibhav"}, {name: "Raunak"}, {name: "Himanshu"}, {name: "Sonu"}, {name: "Bhavya"}, {name: "Samgam"}])

db.items.insertMany([{name: "vaibhav singh", rankHolder: true}, {name: "vaibhav raj", rankHolder: false},{name: "himanshu raj", rankHolder: true}, {name: "sonu kumar", rankHolder: "sometimes"}, {name: "sachin kumar", rankHolder: true}])
