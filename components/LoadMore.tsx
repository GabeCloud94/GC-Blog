'use client'
import { useInView } from "react-intersection-observer"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { fetchBlogPosts } from "@/app/blog/actions"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function LoadMore() {
  const PAGE_COUNT = 2
  const [offset, setOffset] = useState(2)
  const { ref, inView } = useInView()
  const [posts, setPosts] = useState<any[]>([])
  const from = offset + 1
  const to = from + PAGE_COUNT + 1

  
  
  useEffect(() => {
    if (inView) {
      fetchBlogPosts(offset, 3, PAGE_COUNT, from, to).then((res: any) => {
        setPosts([...posts, ...res])
        setOffset((prev) => prev + 3)
      })
    }
  }, [inView])
  
  return (
    <>
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
      <section className="py-4">
        <div ref={ref} className="flex justify-center items-center gap-4">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
      </section>
    </>
  )
}