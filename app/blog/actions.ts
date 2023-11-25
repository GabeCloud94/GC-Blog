'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface FormData {
  title: string,
  content: string,
  image: string
}

export async function createBlog( formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);



  const { error } = await supabase
      .from('posts')
      .insert({ title: formData.title, content: formData.content, image: formData.image})

      if (error) {
        return 'failed';
      
      }
      revalidateTag('posts') // Update cached posts
      redirect(`/blog`) // Navigate to new route  
      
}