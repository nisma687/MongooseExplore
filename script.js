const mongoose = require('mongoose');

const uri = "mongodb+srv://practiseMongoose:HLidxGEoU6zJVnWo@cluster0.231nuf3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
