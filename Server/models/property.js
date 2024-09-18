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
    property_type: { type: String, required: true }, // e.g., apartment, house
    number_of_rooms: { type: Number, required: true },
    images: { type: [String], default: [] }, // Array of image URLs
    videos: { type: String }, // URL to video (optional)
    tours_3D: { type: String } // URL to 3D tours (optional)
  }, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

export default Property;