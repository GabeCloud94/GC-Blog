import { toast } from "@/components/ui/use-toast"
import { updateBlogPost } from "../../actions"
import { formSchema } from "./EditPostPage"
import * as z from "zod"

export default async function onSubmit(data: z.infer<typeof formSchema>) {
    
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  })
  updateBlogPost(data, data.id)
}