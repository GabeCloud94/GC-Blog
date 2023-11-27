import { LoadMore } from '@/app/blog/LoadMore';
import { Suspense } from 'react';
import BlogSkeleton from './BlogSkeleton';
import AllPosts from './AllPosts';
import LoadMoreSkeleton from './LoadMoreSkeleton';

export default async function Posts() { 
  

  return (
    <>    
      <h1 className='text-3xl text-center w-full py-4'>Recent Blog Posts</h1>  
      <Suspense fallback={<BlogSkeleton />}>
        <AllPosts />
      </Suspense>
      <Suspense fallback={<LoadMoreSkeleton />}>
        <LoadMore />
      </Suspense>
    </>
)}
