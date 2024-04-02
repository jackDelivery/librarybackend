const mongoose = require('mongoose');
const BooksSchema = new mongoose.Schema({
  carname: {
    type: String,
    required: true
  },
  seater: {
    type: String,
    required: true,
    // unique: true
  },
  mileage: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  model: {
    type: Number,
    required: true
  },
  borowedby: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }
});

// BooksSchema.methods.comparePassword = function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };
const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;
