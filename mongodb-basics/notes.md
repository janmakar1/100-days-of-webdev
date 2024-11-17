## General

`test> show dbs` - show all databases

`test> use ratingportal` - use the collection (~ table in SQL databases) - create one, if that

## Inserting data with MongoDB

`ratingportal> db.restaurants.insertOne({ name: "Munich Schnitzelhouse", address: { street: "Some Street 5", streetNumber: "23b"}})` - insert one document (~record)

`ratingportal> db.restaurants.insertOne({ name: "Burgerhouse", address: { street: "Another Street", streetNumber: "15"}})` - insert another one

## Reading and filtering data

`db.restaurants.find()` - show all documents in collection
`db.restaurants.find({ name: "Munich Schnitzelhouse" })` - show data with specified condition, here attribute name, returns a list of objects
`db.restaurants.find({}, { name:1 })` - show only names of all documents in collection (~ `SELECT name FROM table` in SQL), but shows also the id of the objects
`db.restaurants.find({}, { name:1, _id: 0 })` - if you wanna do not show ids, need to specify it explicitly

## Updating Documents In MongoDB Database

`db.restaurants.updateOne({_id: ObjectId("6739d66409da7ede950d8191")}, { $set: { name: "Texax Burger"} })`
`db.restaurants.updateOne({_id: ObjectId('6739d66409da7ede950d8191')}, { $set: { address.street: "Some Street" } })`

## Deleting

`.delete, .deleteMany`
`db.restaurants.updateOne({_id: ObjectId('6739d66409da7ede950d8191')}` - delete by id
`db.restaurants.deleteOne({"name": "Texax Burger"})` - delete by name
