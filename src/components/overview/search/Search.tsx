import React from 'react'
import { Input } from "@/components/ui/input"


export default function Search() {
  return (
    <div className='w-64'>
        <Input className='font-medium' type="email" placeholder="Search now..." />
    </div>
  )
}
