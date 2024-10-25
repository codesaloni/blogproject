// BlogDetail.js

import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  // Mock blog data based on the ID
  const blogData = {
    1: {
      title: "First Blog Title",
      content: "This is the full content of the first blog post. It includes all the details and information regarding the topic."
    },
    2: {
      title: "Second Blog Title",
      content: "This is the full content of the second blog post. It includes all the details and information regarding the topic."
    },
    // Add more blogs as needed
  };

  const blog = blogData[id];

  return (
    <div className="p-6">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="mt-4">{blog.content}</p>
        </>
      ) : (
        <p>Blog not found!</p>
      )}
    </div>
  );
};

export default BlogDetail;
