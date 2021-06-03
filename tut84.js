// To update data
db.items.updateOne({name: "Vaibhav Singh"}, {$set: {income: 200000000}})
db.items.updateMany({name: "Vaibhav Singh"}, {$set: {income: 200000000}})