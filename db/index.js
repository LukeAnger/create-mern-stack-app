const mongoose = require('mongoose')

const mongoDB = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

const nameSchema = mongoose.Schema({
  name: String,
})

const Name = mongoose.model('Name', nameSchema)

const save = (name) => {
  Name.create(name)
}

module.exports.save = save
module.exports.Name = Name