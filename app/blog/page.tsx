import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

import Image from 'next/image';
import Link from 'next/link';
import { fetchBlogPosts } from './actions';
import { LoadMore } from '@/components/LoadMore';

export const revalidate = 60

export default async function Posts() {
  const posts = await fetchBlogPosts(0, 3, 1, 0, 2)

  if (!posts) {
    return <p>No posts found.</p>
  } else {

  return (
  <>

   <h1 className='text-3xl text-center w-full py-4'>Recent Blog Posts</h1>
  
    {posts.map((post) => (

          <div key={post.id} className='flex flex-col w-full pt-4 items-center'>
            <div className='flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full'>
              <div className='flex flex-col w-3/4'>
                <h2 className='text-2xl mb-6'>{post.title}</h2>
                <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
                  <Image className='rounded-full w-48 h-48 object-cover object-center' loading="lazy" alt={post.title} src={post.image} width={400} height={400} />
                </div>
                <h3 className='text-sm'>Posted at: {new Date(post.created_at).toLocaleString()}</h3>
                <p className='text-lg truncate'>{post.blog_paragraph_1}</p>
              </div>
              <div>
                <Link href={`/blog/${post.id}`}><Button variant="outline">View Post</Button></Link>
              </div>
            </div>
            <Separator className='mt-6' />
          </div>
        ))}
    <LoadMore />
  </>
)}}
