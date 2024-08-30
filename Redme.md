Expresss Assesment

Creat two API's.

1. Login Registeration

    Create a dummy data as the following.

    {

        id: 1,

        username: 'aditya',

        password: 'aditya123'

    }

    Below are the given routes that you need to create.

    - /user/login

    - /user/register

2. Todo List

    Create a dummy data as the following

    {

        id:1,

        title: "Grocery Shopping",

        completed: false

    }

    Below are the given routes that you need to create.

    - /todo: Returns all the todo items

    - /todo/create: Creates a new todo

    - /todo/update/:id: Updates an existing todo item. (Only "title" OR "completed" should be updated)

    - /todo/delete/:id: Deletes a todo item

3. Create a middleware to handle errors.