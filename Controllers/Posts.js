const dataJSON = require('../employees.json');
const Posts = require('../Models/Post');

exports.postCreatePost = async (req, res, next) => {

    const { title, text, author } = req.body;

    try {
        const newPost = await new Posts({
            title,
            text,
            author
        });
        await newPost.save();
        res.status(200).json({
            success: true,
            msg: "Actividad 2 - Ejercicio 1 - Recibe body JSON con los campos title, text y author.",
            data: newPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 2 - Ejercicio 1 - Devuelve HTTP 400 si hay errores en la validación del body de la petición contra el esquema definido.",
            data: error.message
        });
    }

};

exports.getAllPosts = async (req, res, next) => {

    try {
        const allPosts = await Posts.find({});
        res.status(200).json({
            success: true,
            msg: "Actividad 2 - Ejercicio 2 - Devuelve HTTP 200 OK con el listado JSON de posts almacenados en la Base de Datos.",
            data: allPosts
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 2 - Ejercicio 2 - Devuelve HTTP 200 OK con el listado JSON de posts almacenados en la Base de Datos.",
            data: error.message
        });
    }

};

exports.getPostByID = async (req, res, next) => {

    const {id} = req.params;

    try {
        const Post = await Posts.findById(id);
        res.status(200).json({
            success: true,
            msg: "Actividad 2 - Ejercicio 3 - Devuelve 200 OK con detalle de un Post JSON almacenado en la Base de Datos en memoria.",
            data: Post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 2 - Ejercicio 3 - Devuelve 404 si el post no existe en la Base de Datos en memoria."
        });
    }

};

exports.patchUpdatePostByID = async (req, res, next) => {

    const { id } = req.params;

    try {
        const updatedPost = await Posts.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            success: true,
            msg: "Actividad 2 - Ejercicio 4 - Devuelve 200 OK con detalle de un Post JSON almacenado en la Base de Datos en memoria tras modificar sus atributos con lo indicado en el body.",
            data: updatedPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 2 - Ejercicio 4 - Devuelve 404 si el post no existe en la Base de Datos en memoria.",
            data: error.message
        });
    }

};

exports.deletePostByID = async (req, res, next) => {

    const { id } = req.params;

    try {
        const deletedPost = await Posts.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            msg: "Actividad 2 - Ejercicio 5 - Devuelve HTTP 204 tras eliminar el post id == <id> de la Base de Datos en memoria.",
            data: deletedPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 2 - Ejercicio 5 - Devuelve 404 si el post no existe en la Base de Datos en memoria."
        });
    }

};