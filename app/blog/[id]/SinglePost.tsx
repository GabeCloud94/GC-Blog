import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { AiFillEdit, AiOutlineRollback } from "react-icons/ai";

const SinglePost = ( post: any ) => {

  return (
    <div className='md:max-w-3xl lg:max-w-5xl px-6 mx-auto pt-4' key={post.id}>
      <Button className="absolute top-4 left-4 text-2xl" asChild variant="ghost"><Link href={`/blog`}><AiOutlineRollback /></Link></Button>
      <Button className="absolute top-10 right-10 text-2xl" asChild variant="ghost"><Link href={`/blog/${post.id}/edit`}><AiFillEdit /></Link></Button>
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