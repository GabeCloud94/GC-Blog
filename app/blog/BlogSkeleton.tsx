import { Separator } from "@/components/ui/separator"
import { Skeleton } from "../../components/ui/skeleton"

const BlogSkeleton = () => {
  return (
      <>
        <div  className="flex flex-col w-full pt-4 items-center py-4">
          <div className="flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full">
          <div className="flex flex-col w-3/4 items-center md:items-start">
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-6" />
            <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
              <Skeleton className="w-[200px] h-[200px] rounded-full" />
            </div>
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-2" />
            <Skeleton className="w-[200px] h-[20px] rounded-full" />
          </div>
          <Skeleton className="w-[100px] h-[40px] rounded-md" />

          </div>
          <Separator className='mt-6' />
        </div>
        <div  className="flex flex-col w-full pt-4 items-center py-4">
          <div className="flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full">
          <div className="flex flex-col w-3/4 items-center md:items-start">
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-6" />
            <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
              <Skeleton className="w-[200px] h-[200px] rounded-full" />
            </div>
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-2" />
            <Skeleton className="w-[200px] h-[20px] rounded-full" />
          </div>
          <Skeleton className="w-[100px] h-[40px] rounded-md" />

          </div>
          <Separator className='mt-6' />
        </div>
        <div  className="flex flex-col w-full pt-4 items-center py-4">
          <div className="flex flex-col text-center mx-auto gap-4 md:gap-0 md:text-left md:flex-row justify-center md:justify-between items-center px-4 md:max-w-3xl lg:max-w-5xl w-full">
          <div className="flex flex-col w-3/4 items-center md:items-start">
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-6" />
            <div className="max-w-md mb-6 rounded-full flex justify-center md:justify-start">
              <Skeleton className="w-[200px] h-[200px] rounded-full" />
            </div>
            <Skeleton className="w-[200px] h-[20px] rounded-full mb-2" />
            <Skeleton className="w-[200px] h-[20px] rounded-full" />
          </div>
          <Skeleton className="w-[100px] h-[40px] rounded-md" />

          </div>
          <Separator className='mt-6' />
        </div>
      </>
  )
}

export default BlogSkeleton