import express from 'express';
import errorhandler from './middleware/errorhandler.js';
const app = express();

app.use(express.json());
app.use(errorhandler)

const todolist = [
    {
        id: 1,
        title: "Grocery Shopping",
        completed: false
    },
    {
        id: 2,
        title: "Party Shopping",
        completed: true
    },
    {
        id: 3,
        title: 'Campus Shopping',
        completed: true
    }
];

app.get('/todo', (req, res) => {
    res.json(todolist);
});

app.post('/todo/create', (req, res,next) => {
    const todo = req.body;
    if (!todo.id || !todo.title || todo.completed === undefined) {
        const error=new Error('id, title, and completed are required')
        error.status(404)
        return next(error)
    }
    todolist.push(todo);
    res.json({ message: 'Todo item created successfully' });
});


app.put('/todo/update/:id', (req, res,next) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const todoIndex = todolist.findIndex(todo => todo.id === id);

    if (todoIndex===-1) {
        const error=new Error('Todo item not found')
        error.status(404)
        return next(error)
        // return res.status(404).json({ message: 'Todo item not found' });
    }
    if (title!==undefined) {
        todolist[todoIndex].title = title;
    }
    if (completed!==undefined) {
        todolist[todoIndex].completed = completed;
    }
    
    res.json({ message: 'Todo item updated successfully', todo: todolist[todoIndex] });
});

app.delete('/todo/delete/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const index = todolist.findIndex(todo => todo.id === id);
    if (index===-1) {
        const error=new Error('Todo item not found')
        error.status(404)
        return next(error)

    }
    todolist.splice(index, 1);
    res.json({ message: 'Todo item deleted successfully' });
});

app.listen(4000, () => {
    console.log("The server is running on port 4000");
});
