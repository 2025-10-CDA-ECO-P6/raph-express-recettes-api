import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import recipeRoutes from './routes/recipesRouter.js';
import { initDatabase } from './models/initDb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/recipes', recipeRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'API Express Recettes'});
})

async function start() {
    await initDatabase();
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur http://localhost:${PORT}`);        
    })
}

start();