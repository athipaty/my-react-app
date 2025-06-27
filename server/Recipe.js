const mongoose = require('mongoose');

// Define recipe structure
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],   // Array of strings
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
});

// Turn schema into a model
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the model
module.exports = Recipe;
