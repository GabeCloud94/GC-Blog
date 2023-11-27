import { fetchBlogPost } from '../actions';

export const revalidate = 60

export default async function Post({ params }: { params: { id: string } }) {
  const post = await fetchBlogPost(params)

  return (
    <>
      {post}
    </>
  )
}