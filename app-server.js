const express = require('express');
const app = express();
//Import router
const blogRoutes = require('./routes/blogs');

//Setup middleware
app.use(express.json());
app.use(express.static('public'));
// mount routes at /api/blog
app.use('/api/blogs', blogRoutes);

module.exports = app;
