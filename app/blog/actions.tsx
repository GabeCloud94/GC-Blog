'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidateTag } from "next/cache";


import { redirect } from "next/navigation";
import BlogCard from "./BlogCard";



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
