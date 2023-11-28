import { Suspense } from "react"
import PostPage from "./PostPage"
import SinglePostSkeleton from "./SinglePostSkeleton"



export default function Page({ params }: { params: { id: string } }) {
  return(
  <>
    <Suspense fallback={<SinglePostSkeleton />}>
      <PostPage params={params} />
    </Suspense>
  </>
  )
}