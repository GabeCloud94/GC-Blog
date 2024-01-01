import { MotionDiv } from "@/components/MotionDiv"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1}
}



export default function BlogCard({post, from}: any) {
  return (
    <MotionDiv variants={variants} initial="hidden" animate="visible" transition={{ delay: from * .25, ease: 'easeInOut', duration: 1,}} viewport={{ amount: 0 }} className='flex flex-col w-full pt-4 items-center'>
            <div className='flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full'>
              <div className='flex flex-col w-3/4'>
                <h2 className='text-2xl mb-6'>{post.title}</h2>
                <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
                  <Image className='rounded-full w-48 h-48 object-cover object-center' loading="lazy" alt={post.title} src={post.image} width={400} height={400} />
                </div>
                <h3 className='text-sm'>Posted on: {new Date(post.created_at).toLocaleDateString()}</h3>
                <div className="text-lg truncate" dangerouslySetInnerHTML={{ __html: post.blog_paragraph_1}} />
              </div>
              <div>
              <Button variant="default" asChild><Link href={`/blog/${post.id}`}>View Post</Link></Button>
              </div>
            </div>
            <Separator className='mt-6' />
          </MotionDiv>
  )
}