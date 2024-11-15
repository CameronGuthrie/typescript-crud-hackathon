import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// In-memory task list
let tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build a CRUD App', completed: false },
];

// GET all tasks
app.get('/api/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

// Additional CRUD endpoints can be added here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
