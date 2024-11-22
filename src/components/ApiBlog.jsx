// Imports react functions
import { useState, useEffect } from "react";

// Imports API call function
import { getBlogs } from "./Api";

// Main blog component
export default function ApiBlog() {
  // Declares useStates
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calls and sets useState data
  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Renders a loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Renders an error state
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  // Renders blog posts
  return (
    <>
      <h1>Posts</h1>
      <div>
        {blogs.map(blog => (
          <div key={blog.id}>
            <h2>
              <span>{blog.id}.</span> {blog.title}
            </h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
