import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review_text: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;