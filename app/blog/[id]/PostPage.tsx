import { fetchBlogPost } from '../actions';

export const revalidate = 0

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchBlogPost(params)

  return (
    <>
      {post}
    </>
  )
}