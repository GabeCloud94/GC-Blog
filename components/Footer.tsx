import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
      <footer className="sticky bottom-0 mt-auto pb-4 w-full bg-background shadow-lg shadow-muted-foreground ">
        <Separator className="mb-4" />
        <form className="" action="/auth/signout" method="post">
          <Button variant="default" className='mx-auto button text-xl flex items-center justify-center' type='submit'>Sign Out</Button>
        </form>
      </footer>
  )
}

export default Footer