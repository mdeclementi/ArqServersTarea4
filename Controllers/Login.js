const dataJSON = require('../employees.json');
const Users = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.postLogin = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email: email, active: true });
        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                res.status(200).json({
                    success: true,
                    msg: "Actividad 3 - Ejercicio 2 - Devuelve HTTP 200 OK con token JWT de sesión si las credenciales son correctas.",
                    token: createToken(user._id)
                });
            } else {
                res.status(401).json({
                    success: false,
                    msg: "Actividad 3 - Ejercicio 2 - Devuelve HTTP 401 si las credenciales no son correctas.",
                    data: "credenciales no son correctas"
                });
            }            
        } else {
            res.status(401).json({
                success: false,
                msg: "Actividad 3 - Ejercicio 2 - Devuelve HTTP 401 si las credenciales no son correctas.",
                data: "credenciales no son correctas"
            });
        }        

    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 3 - Ejercicio 2 - Devuelve HTTP 400 en caso de error en la validación de datos.",
            data: error.message
        });
    }

};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: '5m',
    });
};