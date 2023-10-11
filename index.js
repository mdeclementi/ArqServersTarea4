const express = require('express');
const app = express();
const cors = require('cors'); app.use(cors());
const mongoose = require('mongoose');
const EmployeesRoutes = require('./Routers/Employees');
const PostsRoutes = require('./Routers/Posts');
const UsersRoutes = require('./Routers/Users');
const LoginRoutes = require('./Routers/Login');

app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://api:Mgv3DsML0k0WEUZf@cluster0.w1wifjo.mongodb.net/ArqServersTarea2?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.listen(8000, () => {
    console.log('server is running')
})

app.use('/api/employees/', EmployeesRoutes);
app.use('/api/posts/', PostsRoutes);
app.use('/api/users/', UsersRoutes);
app.use('/api/login/', LoginRoutes);