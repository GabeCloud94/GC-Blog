import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/utils/supabase/server';
  import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Posts() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: posts } = await supabase.from("posts").select();

  return (
    <>
      {posts?.map((post) => {
          return (
          <div key={post.id} className='flex flex-col w-full py-4'>
            <div className='flex justify-between items-center px-4'>
              <div className='flex flex-col'>
                <h1 className='text-3xl'>{post.title}</h1>
                <h3 className='text-sm'>Posted at: {post.created_at}</h3>
                <p className='text-lg'>{post.content}</p>
              </div>
            <Link href={`/blog/${post.id}`}><Button variant="outline">View Post</Button></Link>
            </div>
            <Separator className='mt-6' />
          </div>
        )})}
    </>
  )
}
