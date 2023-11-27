"use client"

import * as React from "react"
import Link from "next/link"
import logo from "../components/Logo.png"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu"

import { cn } from "@/utils"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"

const links: { title: string; href: string }[] = [

  {
    title: "About",
    href: "/about"
  },
  {
    title: "Account",
    href: "/account"
  },
]



export default function Header() {
  return (
    <>
    <header className="flex justify-between top-0 sticky z-10 bg-neutral-100 dark:bg-neutral-950 w-full px-2 md:px-4 py-2 border-b-2 border-neutral-200 dark:border-neutral-800 items-center">
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem className="md:block hidden">
              <Link href="/home">
                <Image priority src={logo} alt="GC Blog Logo" width={100} height={100} />
              </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Blog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/blog" title="Recent Posts" />
                <ListItem href="/blog/favorites" title="Favorites" />
                <ListItem href="/blog/my-comments" title="My Comments" />
                <ListItem href="/blog/new" title="New Blog" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {links.map((link) => (
                  <NavigationMenuItem
                    key={link.title}
                    title={link.title}
                    className="transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none px-4 py-2 rounded-md"
                  >
                    
                    <Link
                     href={link.href}
                    >
                      {link.title}                 
                    </Link>
                  </NavigationMenuItem>
                ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ModeToggle />
      </div>
    </header>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
