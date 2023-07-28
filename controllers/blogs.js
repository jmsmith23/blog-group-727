const Blog = require('../models/Blog');

//Create Blog Post
exports.createBlog = async (req, res) => {
	try {
		const blog = await Blog.create(req.body);
		res.json(blog);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//Index Blogs
exports.indexBlogs = async (req, res) => {
	try {
		const indexBlogs = await Blog.find({});
		res.json(indexBlogs);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//Show A Specific Blog
exports.showBlog = async (req, res) => {
	try {
		const blog = await Blog.findOne({ _id: req.params.id });
		res.json(blog);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//Delete Post
exports.deleteBlog = async (req, res) => {
	try {
		const blog = await Blog.findOneAndDelete({ _id: req.params.id });
		res.sendStatus(204);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//Update Blog
exports.updateBlog = async (req, res) => {
	try {
		const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, {
			new: true
		});
		res.json(blog);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
