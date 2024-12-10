import { Card } from '@/components/ui/card'
import React from 'react'
import Employee from './employee/Employee'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

export default function Employees() {
  return (
    <div className='pt-6'>
        <Card className='p-5'>
            <div className='flex justify-between'>
                <p className='font-semibold text-2xl'>Top Employees</p>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>


          <DropdownMenuContent align="end">
          </DropdownMenuContent>
        </DropdownMenu>
            </div>
            <div className=' flex flex-col'>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>            
            </div>

        </Card>
    </div>
  )
}
