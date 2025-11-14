import express from "express";
import { createRecipe, getAllRecipes, getRecipeById, deleteRecipeById, deleteAllRecipes, updateRecipe } from "../controllers/recipeController.js";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();


/// Get ///
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);


/// Post ///
router.post('/', authenticateToken, createRecipe);


/// Delete
router.delete('/', authenticateToken, deleteAllRecipes);
router.delete('/:id', authenticateToken, deleteRecipeById);


/// Put
router.put('/:id', authenticateToken, updateRecipe);


export default router;