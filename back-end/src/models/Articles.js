const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    images: [{ type: String }],
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    videos: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);