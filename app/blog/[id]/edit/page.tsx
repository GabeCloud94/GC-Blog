import { Suspense } from "react"
import { fetchUpdateBlogPost } from "../../actions"


export const revalidate = 60

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchUpdateBlogPost(params)
  return(
  <>
    <Suspense fallback="Loading...">
      {post}
    </Suspense>
  </>
  )
}