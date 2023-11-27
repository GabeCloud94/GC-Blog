import Image from "next/image"

const SinglePost = ( post: any ) => {

  return (
    <div className='md:max-w-3xl lg:max-w-5xl px-6 mx-auto pt-4' key={post.id}>
      <h1 className='text-3xl text-center mb-2'>{post.title}</h1>
      <h3 className='text-sm text-center mb-6'>Posted on: {new Date(post.created_at).toDateString()}</h3>
      <div className="max-w-lg mx-auto mb-6">
        <Image loading="eager" alt={post.title} src={post.image} width={600} height={600} />
      </div>
      <p className='text-lg'>{post.blog_paragraph_1}</p>
    </div>
  )
}

export default SinglePost