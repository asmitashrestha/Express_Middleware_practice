// use db_name
// show collections
// db.createCollection("table-name")
// db.users.insertOne("")
// db.users.insertMany("")

db.products.insertMany([
    {
        name: "shos",
        price: 2400
    },
    {
        name: "gass",
        price: 900
    },
])

db.products.updateOne({name:"shoes"}, {$set :{price:4000}})

db.products.deleteOne({name:"shoes"})


db.products.insertMany([
    {name:"TV"},
    {name:"Laptop"},
])


db.products.updateMany({price:{ $exists: 0}},{$set :{price:50}})

db.products.find({name:RegExp('t-shirt')})
db.products.find({name:RegExp('shirt','i')})