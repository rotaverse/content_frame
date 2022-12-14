import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  SlidesUrl: {
    type: String,
    required: false,
  },
  VideoUrl: {
    type: String,
    required: false,
  },
  resources: {
    type: String,
    required: false,
  },
  activities: {
    type: String,
    required: false,
  },
  questions: {
    type: String,
    required: false,
  },
  narrative: {
    type: String,
    required: false,
  },
  tosell: {
    type: Boolean,
    required: true,
  },
  ownerid: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
)

const Product = mongoose.model("product", productSchema)

export default Product
