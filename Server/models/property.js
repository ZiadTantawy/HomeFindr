import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: {
      address: { type: String, required: true },
      coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
      }
    },
    property_type: { type: String, required: true, enum: ["Apartment", "Villa", "Twinhouse", "Townhouse", "Duplex", "Penthouse", "Chalet", "Studio", "Cabin", "Clinic", "Office", "Retail"] },
    number_of_rooms: { type: Number, required: true },
    images: { type: [String], default: [] }, 
    videos: { type: String },
  }, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

export default Property;