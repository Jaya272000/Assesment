import express from 'express';
import errorhandler from './middleware/errorhandler.js';
import {getuser,createuser,loginuser} from './controller/usercontroll.js'


const app = express();

app.use(express.json());


app.get('/user',getuser)

app.post('/user/register',createuser)

app.post('/user/login',loginuser)
app.use(errorhandler)


app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
