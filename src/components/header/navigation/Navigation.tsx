import React from 'react'

export default function Navigation() {
  return (
    <div>
          <div className='flex items-center justify-center gap-[73px]'>
            <ul className='text-black flex gap-10 items-center justify-center text-base font-semibold '>
              <li className='hover:text-[#abce52] cursor-pointer duration-300'>Overview</li>
              <li className='hover:text-[#adde33] cursor-pointer duration-300'>Finance</li>
              <li className='hover:text-[#adde33] cursor-pointer duration-300'>Product</li>
              <li className='hover:text-[#adde33] cursor-pointer duration-300'>Transaction</li>
              <li className='hover:text-[#adde33] cursor-pointer duration-300'>Employee</li>
            </ul>
          </div>
    </div>
  )
}
