const jwt = require("jsonwebtoken");
require('dotenv').config();

const middlewareValidateToken = () => (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split("Bearer ")[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        return res.status(401).json({
            success: false,
            msg: "Actividad 3 - Ejercicio 4 - El resto de endpoints de nuestra API (CRUD de Posts) deben requerir autenticación y devolver código HTTP 401 ante peticiones no autenticadas.",
        });
    }

    next();

}

module.exports = { middlewareValidateToken };