import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, '../public')));

const port = process.env.PORT || 3030;

function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

// API route
app.use('/api/hitme', (req: Request, res: Response) => {

    res.json({ number: getRandomNum(1, 10) });
});

// Serve index.html for all other routes
app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
