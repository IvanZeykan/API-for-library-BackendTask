import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  pageCount: {type: Number, required: true},
  publishedDate: {
    date: {
      type: Date,
      default: Date.now,
    },
  },
  thumbnailUrl: {type: String, required: true},
  shortDescription: {type: String, required: true},
  longDescription: {type: String, required: true},
  status: {type: String, required: true},
  authors: [String],
});

export default mongoose.model('book', bookSchema)

