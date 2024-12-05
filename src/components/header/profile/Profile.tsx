import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

export default function Profile() {
  return (
    <div className='flex justify-center items-center gap-2'>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Test</AvatarFallback>
        </Avatar>
        <div className=''>
            <p className='font-bold'>Test</p>
            <p className='text-neutral-500'>test@gmail.com</p>
        </div>
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger></NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>
  )
}
