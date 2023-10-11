const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/Posts');
const { middlewareValidateRequestFields, middlewareValidateRequestValues } = require('../Middleware/GlobalMiddleware');
const fieldsValidateToken = ['token'];

router.post("", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), postsController.postCreatePost);
router.get("", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), postsController.getAllPosts);
router.get("/:id", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), postsController.getPostByID);
router.patch("/:id", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), postsController.patchUpdatePostByID);
router.delete("/:id", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), postsController.deletePostByID);

module.exports = router;