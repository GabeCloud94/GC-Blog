import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { AiFillEdit, AiOutlineRollback } from "react-icons/ai";
import DeletePost from "../DeletePost";
import { Metadata } from "next";
import Head from "next/head";

const SinglePost = ( post: {id: string, title: string, created_at: string, image: string, blog_paragraph_1: string} ) => {

  const strippedTitle = post.title.replace(/(<([^>]+)>)/gi, "");
  const strippedDescription = post.blog_paragraph_1.replace(/(<([^>]+)>)/gi, "");
  const metadata: Metadata =  {
      title: `${strippedTitle}`,
      description: `${strippedDescription}`
  }
  
  return (
    <div className='md:max-w-3xl lg:max-w-5xl px-6 mx-auto pt-4' key={post.id}>
      <Head>
      <meta name="title" content={metadata.title?.toString() || ''} />
        <meta name="description" content={metadata.description || ''} />
      </Head>
      <div className="flex justify-between">
        <Button className="text-2xl" asChild variant="ghost"><Link href={`/blog`}><AiOutlineRollback /></Link></Button>
        <div className="flex gap-4">
          <Button className="text-2xl" asChild variant="ghost"><Link href={`/blog/${post.id}/edit`}><AiFillEdit /></Link></Button>
          <DeletePost id={post.id} />
        </div>
      </div>
      <h1 className='text-3xl text-center mb-2'>{post.title}</h1>
      <h3 className='text-sm text-center mb-6'>Posted on: {new Date(post.created_at).toDateString()}</h3>
      <div className="max-w-lg mx-auto mb-6">
        <Image loading="eager" alt={post.title} src={post.image} width={600} height={600} />
      </div>
      <div className="mb-6" dangerouslySetInnerHTML={{ __html: post.blog_paragraph_1}} />
    </div>
  )
}

export default SinglePost