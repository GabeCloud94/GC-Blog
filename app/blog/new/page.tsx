import * as z from "zod"
 

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"




 

export default function NewBlog() {
  
  
  
  // 1. Define your form.
  
  
  // 2. Define a submit handler.
  async function createBlog( formData: FormData) {
    'use server'
    const formSchema = z.object({
      title: z.string().min(2).max(55),
      image: z.string(),
      blog_paragraph_1: z.string().min(2),
    })
    const data = formSchema.parse({
      title: formData.get('title'),
      image: formData.get('image'),
      blog_paragraph_1: formData.get('blog_paragraph_1'),
    })


    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
  
  
  
    const { error } = await supabase
        .from('posts')
        .insert({"title": data.title, "image": data.image, "blog_paragraph_1": data.blog_paragraph_1, })
  
        if (error) {
          console.log(`${error}`)
        
        }
        revalidateTag('posts') // Update cached posts
        redirect(`/blog`) // Navigate to new route  
        
        
  }
  

  return (
    <>
      <h1 className="text-center text-3xl mb-6 pt-4">New Blog</h1>
      <form action={createBlog}>
        <div className="flex flex-col max-w-2xl mx-4 gap-4">
          <label htmlFor="title">Blog Title</label>
          <Input className="p-4" type="text" name="title" id="title" />
          <label htmlFor="title">Blog Image</label>
          <Input className="p-4" type="text" name="image" id="image" />
          <label htmlFor="content">Blog Paragraph 1</label>
          <Textarea placeholder="Insert Blog Paragraph 1 Content Here." name="blog_paragraph_1" id="blog-paragraph-1" />
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}