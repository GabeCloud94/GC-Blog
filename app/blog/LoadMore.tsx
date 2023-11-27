'use client'
import { useInView } from "react-intersection-observer"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { fetchBlogPosts } from "@/app/blog/actions"

export function LoadMore() {
  
  const [offset, setOffset] = useState(2)
  const { ref, inView } = useInView()
  const [posts, setPosts] = useState<any[]>([])
  const from = offset + 1
  const to = from + 3

  
  
  useEffect(() => {
    if (inView) {
      fetchBlogPosts( 3, from, to).then((res: any) => {
        setPosts([...posts, ...res])
        setOffset((prev) => prev + 3)
      })
    }
  }, [inView])
  
  return (
    <>


{posts}
      <section className="py-4">
        <div ref={ref} className="flex flex-col w-full pt-4 items-center">
          <div className="flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full">
          <div className="flex flex-col w-3/4 items-center md:items-start">
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-6" />
            <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
              <Skeleton className="w-[200px] h-[200px] rounded-full" />
            </div>
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-2" />
            <Skeleton className="w-[200px] h-[20px] rounded-full" />
          </div>
          <Skeleton className="w-[100px] h-[40px] rounded-md" />

          </div>
        </div>
      </section>
    </>
  )
}