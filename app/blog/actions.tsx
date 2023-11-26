'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BlogCard from "./BlogCard";

export const fetchBlogPosts = async (limit: number, from: number, to: number) => {
  

  const cookieStore = cookies()
    const supabase = createClient(cookieStore);
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
