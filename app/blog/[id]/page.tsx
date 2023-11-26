import { createClient } from '@/utils/supabase/server';
  import { cookies } from 'next/headers';
import Image from "next/image"


export const revalidate = 60


export default async function Post({ params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  const { data: posts} = await supabase
    .from("posts")
    .select('id, title, image, blog_paragraph_1')
    .match({id: `${params.id}`})

    if (!posts) {
      return <p>No posts found.</p>
    }
  
  return posts.map((post) => (
      <div className='md:max-w-3xl lg:max-w-5xl px-6 mx-auto pt-4' key={post.id}>
        <h1 className='text-3xl text-center mb-6'>{post.title}</h1>
        <div className="max-w-lg mx-auto mb-6">
          <Image loading="eager" alt={post.title} src={post.image} width={600} height={600} />
        </div>
        <p className='text-lg'>{post.blog_paragraph_1}</p>
      </div>
  ))
}