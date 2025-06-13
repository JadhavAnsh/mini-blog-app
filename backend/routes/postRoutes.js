const express = require('express');
const BlogRouter = express.Router();
const { AllPosts, GetPost, CreatePost, UpdatePost, DeletePost} = require('../controllers/postController.js');

BlogRouter.get('/', AllPosts);
BlogRouter.get('/:id', GetPost);
BlogRouter.post('/', CreatePost);
BlogRouter.patch('/:id', UpdatePost);
BlogRouter.delete('/:id', DeletePost);

module.exports = BlogRouter;