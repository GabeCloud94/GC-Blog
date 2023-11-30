import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { cn } from '@/utils'
import { inter } from '@/components/ui/fonts' 
import { Toaster } from '@/components/ui/toaster'



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Gabe Cloud's blog",
  description: 'Built with Next.JS 14, Supabase, Shadcn UI, Tailwind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' style={{ colorScheme: 'dark' }}>
      <body className={cn(
          "antialiased min-h-screen relative",
          inter.className
      )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
