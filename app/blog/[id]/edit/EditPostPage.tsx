'use client'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AiOutlineRollback } from "react-icons/ai";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import onSubmit from './OnSubmit';
import Link from "next/link"


export const formSchema = z.object({
  id: z.string().min(2).max(255),
  title: z.string().min(2).max(55),
  image: z.string(),
  blog_paragraph_1: z.string().min(2),
})



export default function EditPostPage( post: {id: string, title: string, image: string, blog_paragraph_1: string} ) {

 

  
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: post.id,
      title: post.title,
      image: post.image,
      blog_paragraph_1: post.blog_paragraph_1
    },
  })



  return (
    <div >
      <Button className="absolute top-4 left-4 text-2xl" asChild variant="ghost"><Link href={`/blog/${post.id}`}><AiOutlineRollback /></Link></Button>
      <h1 className="text-center text-3xl mb-6 pt-4">Edit Blog</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col max-w-2xl mx-4 gap-4 md:mx-auto">
          <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog id</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Image</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="blog_paragraph_1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Paragraph 1</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  
  )
          }

