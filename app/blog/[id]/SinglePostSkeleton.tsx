import { Skeleton } from "@/components/ui/skeleton";

export default function SinglePostSkeleton() {
  return (
    <div className='md:max-w-3xl lg:max-w-5xl px-6 mx-auto pt-4 flex flex-col items-center'>
    <Skeleton className="w-[350px] h-[20px] rounded-full mb-2" />
    <Skeleton className="w-[200px] h-[20px] rounded-full mb-4" />
    <div className="max-w-lg mx-auto mb-6">
      <Skeleton className="w-[500px] h-[350px]" />
    </div>
    <Skeleton className="w-[600px] h-[20px] rounded-full mb-4" />
    <Skeleton className="w-[600px] h-[20px] rounded-full mb-4" />
    <Skeleton className="w-[600px] h-[20px] rounded-full mb-4" />
    <Skeleton className="w-[600px] h-[20px] rounded-full mb-4" />
  </div>
  )
}