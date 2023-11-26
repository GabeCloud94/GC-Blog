'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchBlogPosts = async (offset: number, limit: number, PAGE_COUNT: number, from: number, to: number) => {
  

  const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data: posts } = await supabase.from("posts")
    .select()
    .range(from, to)
    .order('created_at', { ascending: false})
    .limit(limit)

    return posts;
}
