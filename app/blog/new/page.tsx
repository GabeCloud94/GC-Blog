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
      content: z.string().min(2),
      image: z.string()
    })
    const data = formSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
      image: formData.get('image')
    })


    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
  
  
  
    const { error } = await supabase
        .from('posts')
        .insert({"title": data.title, "content": data.content, "image": data.image})
  
        if (error) {
          console.log(`${error}`)
        
        }
        revalidateTag('posts') // Update cached posts
        redirect(`/blog`) // Navigate to new route  
        
        
  }
  

  return (
    <>
      <h1 className="text-center text-3xl mb-6">New Blog</h1>
      <form action={createBlog}>
        <div className="flex flex-col max-w-2xl mx-auto gap-4">
          <label htmlFor="title">Blog Title</label>
          <Input className="p-4" type="text" name="title" id="title" />
          <label htmlFor="content">Blog Content</label>
          <Textarea placeholder="Insert Blog Content Here." name="content" id="content" />
          <label htmlFor="title">Blog Image</label>
          <Input className="p-4" type="text" name="image" id="image" />
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}