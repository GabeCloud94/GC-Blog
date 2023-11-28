'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidateTag } from "next/cache";


import { redirect } from "next/navigation";
import BlogCard from "./BlogCard";

import SinglePost from './[id]/SinglePost';



export async function createBlogPost( data: any) {


  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )




  const { error } = await supabase
      .from('posts')
      .insert({"title": data.title, "image": data.image, "blog_paragraph_1": data.blog_paragraph_1, })

      if (error) {
        console.log(`${error}`)
      
      }
      revalidateTag('posts') // Update cached posts
      redirect(`/blog`) // Navigate to new route  
      
      
}


export const fetchBlogPosts = async (limit: number, from: number, to: number) => {
  

  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
    const { data: posts } = await supabase.from("posts")
    .select()
    .range(from, to)
    .order('created_at', { ascending: false})
    .limit(limit)

    if (!posts) {
      return <p>No posts found.</p>
    } else {

    return posts.map((post) => (

      <BlogCard key={post.id} post={post} />
    ))
}}




export const fetchBlogPost = async (params: {id: string}) => {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
  

  const { data: posts} = await supabase
    .from("posts")
    .select('id, title, created_at, image, blog_paragraph_1')
    .match({id: `${params.id}`})

    if (!posts) {
      return <p>No posts found.</p>
    }
  
  return posts.map((post) => (
      <SinglePost key={post.id} post={post} id={post.id} title={post.title} created_at={post.created_at} image={post.image} blog_paragraph_1={post.blog_paragraph_1} />
  ))

}

