import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function Employee() {
  return (
    <div className='flex justify-between items-center pb-3 pt-3 border-b-[1px] border-[#f1f1f1]'>
                    <div className='flex justify-center items-center gap-3'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Test</AvatarFallback>
                    </Avatar>
                    <div className=''>
                        <p className='font-bold'>Test</p>
                        <p className='text-neutral-500'>test@gmail.com</p>
                    </div>
                    </div>
                    <p className='font-semibold text-lg text-[#275347]'>$2,521</p>
                </div>
  )
}
