import { fetchBlogPosts } from "./actions"

const AllPosts = async () => {
  const post = await fetchBlogPosts(3, 0, 2)

  if(!post){
    return <p>No posts available.</p>
  }
  return (
    <>
      {post}
    </>
  )}

  export default AllPosts