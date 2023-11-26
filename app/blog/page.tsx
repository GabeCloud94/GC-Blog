import { fetchBlogPosts } from './actions';
import { LoadMore } from '@/components/LoadMore';



export const revalidate = 60



export default async function Posts() {
  
  const post = await fetchBlogPosts(3, 0, 2)

  

  return (
  <>
    
   <h1 className='text-3xl text-center w-full py-4'>Recent Blog Posts</h1>
  
   {post}
    <LoadMore />
  </>
)}
