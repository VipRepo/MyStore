import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: String,
    contactNumber: Number,
    address: String
  }, { collection: 'customer' });
  
  export default mongoose.model('currency', CustomerSchema);
  