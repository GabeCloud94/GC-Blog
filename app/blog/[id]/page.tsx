import { Suspense } from "react"
import PostPage from "./PostPage"
import SinglePostSkeleton from "./SinglePostSkeleton"
import type { Metadata } from 'next'
import { fetchBlogPostMetadata } from "../actions"
 
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const metaData = await fetchBlogPostMetadata(params)
  return {
    title: `${metaData.title}`,
    description: `${metaData.description}`
  }
}



export default function Page({ params }: { params: { id: string } }) {
  return(
  <>
    <Suspense fallback={<SinglePostSkeleton />}>
      <PostPage params={params} />
    </Suspense>
  </>
  )
}