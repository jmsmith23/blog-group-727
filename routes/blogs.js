const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogs');

router.post('/', blogCtrl.createBlog);
router.get('/', blogCtrl.indexBlogs);
router.get('/:id', blogCtrl.showBlog);
router.delete('/:id', blogCtrl.deleteBlog);
router.put('/:id', blogCtrl.updateBlog);

module.exports = router;
