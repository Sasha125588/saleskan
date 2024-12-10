import React from 'react'

export default function AllStock() {
  return (
    <div>
        <div className='bg-[#1d1d1d] h-60 rounded-lg py-5 border border-[#1d1d1d] items-center px-5 text-white'>
            <p className='font-light text-[#e2dfdf]'>Total All Stock Product</p>
            <p className='text-4xl font-semibold pt-2'>2.478</p>
            <div className='bg-[#adde33] w-full rounded-[2px] h-[14px] mt-8'></div>
            <div className='flex justify-between pt-4'>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='bg-[#adde33] p-[5px] rounded-full'></span>
                        <p className='font-normal text-sm text-[#8a8989]'>Sold Out</p>
                    </div>
                    <p className='text-2xl font-semibold pt-2'>11.167</p>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='bg-white p-[5px] rounded-full'></span>
                        <p className='font-normal text-sm text-[#8a8989]'>Total Stock</p>
                    </div>
                    <p className='text-2xl font-semibold pt-2'>13.645</p>
                </div>
            </div>
        </div>
    </div>
  )
}
