const router = require('express').Router();
const blogCtrl = require('../controllers/blogs');

//Create blog
router.post('/', blogCtrl.createBlog);
//Show all blogs
router.get('/', blogCtrl.indexBlogs);
//Show individual blog
router.get('/:id', blogCtrl.showBlog);
//Delete blog
router.delete('/:id', blogCtrl.deleteBlog);
//Update blog
router.put('/:id', blogCtrl.updateBlog);

module.exports = router;
