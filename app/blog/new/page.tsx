'use client'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createBlogPost } from "../actions"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  title: z.string().min(2).max(55),
  image: z.string(),
  blog_paragraph_1: z.string().min(2),
})

 

export default function NewBlog() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
      blog_paragraph_1: ""
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    createBlogPost(data)
  }

  return (
    <>
      <h1 className="text-center text-3xl mb-6 pt-4">New Blog</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col max-w-2xl mx-4 gap-4 md:mx-auto">
          <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Title</FormLabel>
              <FormControl>
                <Input placeholder="Insert Blog Title Here" {...field} />
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
                <Input placeholder="Insert Blog Image URL Here" {...field} />
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
                <Textarea placeholder="Insert Blog Paragraph 1 Content Here" {...field} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  )
}