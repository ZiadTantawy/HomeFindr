import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    payment_status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    date: { type: Date, default: Date.now }
  }, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;