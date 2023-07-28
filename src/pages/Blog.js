import { useState, useEffect } from 'react';

export default function Blog(props) {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/blogs');
				const data = await res.json();
				setBlogs(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			{blogs.length ? (
				<>
					{blogs.map((blog) => (
						<div key={blog.title}>{blog.body}</div>
					))}
				</>
			) : (
				<h1>Welcome to my Humble Blog</h1>
			)}
		</>
	);
}
