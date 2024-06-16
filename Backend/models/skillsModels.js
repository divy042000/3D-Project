const mongoose = require('mongoose');

// Define schema for skill
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Ensure each skill name is unique
  }
});

// Create and export the Skill model
module.exports = mongoose.model('Skill', skillSchema);
