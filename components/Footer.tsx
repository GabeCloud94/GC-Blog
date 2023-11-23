import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <div className="fixed bottom-0 py-4 w-screen">
      <Separator className="mb-4" />
      <form action="/auth/signout" method="post">
        <Button variant="outline" className='mx-auto button text-xl flex items-center justify-center' type='submit'>Sign Out</Button>
      </form>
    </div>
  )
}

export default Footer