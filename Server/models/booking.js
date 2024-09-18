import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    booking_date: { type: Date, default: Date.now },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    total_price: { type: Number, required: true },
    payment_status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    booking_status: { type: String, enum: ['confirmed', 'canceled', 'completed'], default: 'confirmed' }
  }, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;