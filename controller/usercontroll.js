const users = [
    {
        "id": 1,
        "username": "jaya",
        "password": "jaya@123"
    },
    {
        "id": 2,
        "username": "priya",
        "password": "priya@123"
    }
];
function getuser(req, res) {
    res.send(users)
};

function createuser(req, res) {
    const user = req.body;
    if (!user.id || !user.username || !user.password) {
        const error=new Error('username,password should be important')
        error.status=404
        next(error);
        
    }
    users.push(user);
    res.json({ message: 'User registered successfully' });
};

function loginuser(req, res,next){
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return res.status(200).json({ message: 'User login successful' });
    }
    const error=new Error('username and password is not found')
    error.status=404
    next(error);
    // res.status(404).json({ message: 'username and password is not found' });

};

export{getuser,createuser,loginuser}