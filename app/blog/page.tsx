import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60

export default async function Posts() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: posts } = await supabase.from("posts")
  .select()
  .limit(12)
  .order('created_at', { ascending: false})

  if (!posts) {
    return <p>No posts found.</p>
  }

  return (
<>

   <h1 className='text-3xl text-center w-full py-4'>Recent Blog Posts</h1>
  
  {posts.map((post) => (

          <div key={post.id} className='flex flex-col w-full pt-4 items-center'>
            <div className='flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-2xl lg:max-w-5xl w-full'>
              <div className='flex flex-col w-3/4'>
                <h2 className='text-2xl mb-6'>{post.title}</h2>
                <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
                  <Image className='rounded-full w-48 h-48 object-cover object-center' loading="lazy" alt={post.title} src={post.image} width={400} height={400} />
                </div>
                <h3 className='text-sm'>Posted at: {new Date(post.created_at).toLocaleString()}</h3>
                <p className='text-lg truncate'>{post.blog_paragraph_1}</p>
              </div>
              <div className='w-full flex justify-center'>
                <Link className='w-1/4' href={`/blog/${post.id}`}><Button variant="outline">View Post</Button></Link>
              </div>
            </div>
            <Separator className='mt-6' />
          </div>
        ))}
        </>
        )}
