import express from "express";
import dotenv from 'dotenv';
import apiRoutes from './src/routes/api.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', apiRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
