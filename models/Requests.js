const mongoose = require('mongoose');
const RequestsSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accountno: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  reqfor: {
    type: String,
    required: true
  },
});

// BooksSchema.methods.comparePassword = function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };
const Requests = mongoose.model('Requests', RequestsSchema);

module.exports = Requests;
