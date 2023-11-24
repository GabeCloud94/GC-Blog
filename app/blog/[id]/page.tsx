import { createClient } from '@/utils/supabase/server';
  import { cookies } from 'next/headers';
  

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: posts } = await supabase.from("posts").select();
  
  return (
    <>
      {posts?.map((post) => {
      if (post.id === params.id) {
    return (
      <div className='max-w-5xl px-6 mx-auto' key={post.id}>
        <h1 className='text-3xl text-center mb-6'>{post.title}</h1>
        <p className='text-lg'>{post.content}</p>
      </div>
    )
  }
  })
  }
  </>
  )
}