'use client'
import { Button } from "@/components/ui/button";
import { deleteBlogPost } from "./actions";
import { toast } from "@/components/ui/use-toast";

export default async function DeletePost(post: {id: string}) {

  async function onSubmit(post: {id: string}) {
    toast({
      title: "You deleted the post with ID:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(post.id, null, 2)}</code>
        </pre>
      ),
    })
    deleteBlogPost(post.id)
  }

  return (
    <>
      <Button variant="destructive" onClick={() => onSubmit(post)}>Delete</Button>
    </>
  )
  
}