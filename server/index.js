const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connectionString = 'mongodb+srv://athipaty:yMycnTXQU2kf2HGa@cluster0.tigttzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.log('❌ MongoDB connection error:', error));

// GET all recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// POST a new recipe
app.post('/recipes', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe saved successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to save recipe' });
  }
});

// DELETE a recipe
app.delete('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
