// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://userone:userone@maincluster.04zxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Schema Definition
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    ingredients: String,
    steps: String,
    author: String,
    time: Number,
    img: String
});

// Model Creation
var RecipeData = mongoose.model('recipedata', RecipeSchema);

module.exports = RecipeData;