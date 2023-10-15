const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/Posts');
const { middlewareValidateToken } = require('../Middleware/GlobalMiddleware');

router.post("", middlewareValidateToken(), postsController.postCreatePost);
router.get("", middlewareValidateToken(), postsController.getAllPosts);
router.get("/:id", middlewareValidateToken(), postsController.getPostByID);
router.patch("/:id", middlewareValidateToken(), postsController.patchUpdatePostByID);
router.delete("/:id", middlewareValidateToken(), postsController.deletePostByID);

module.exports = router;