// Async API call function
export async function getBlogs() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Data fetching failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw the error so it can be handled by the caller if needed
  }
}
