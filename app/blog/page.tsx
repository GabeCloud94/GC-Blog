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

  return posts.map((post) => (

          <div key={post.id} className='flex flex-col w-full pt-4 items-center'>
            <div className='flex justify-between items-center px-4 max-w-5xl w-full'>
              <div className='flex flex-col'>
                <h1 className='text-3xl mb-6'>{post.title}</h1>
                <div className="max-w-md mb-6 rounded-full">
                  <Image className='rounded-full w-48 h-48' loading="lazy" alt={post.title} src={post.image} width={400} height={400} />
                </div>
                <h3 className='text-sm'>Posted at: {post.created_at}</h3>
                <p className='text-lg'>{post.content}</p>
              </div>
            <Link href={`/blog/${post.id}`}><Button variant="outline">View Post</Button></Link>
            </div>
            <Separator className='mt-6' />
          </div>
        ))}
