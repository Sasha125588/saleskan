import React from 'react'
import Search from './search/Search'
import Filter from './filter/Filter'

export default function Overview() {
  return (
    <div className='flex justify-between items-center pt-10 px-9'>
        <div>
            <p className='font-bold text-3xl'>
                Overview
            </p>
            <p className='pt-1 text-neutral-500'>
                Monitor every activity of your company
            </p>
        </div>
        <div className='flex items-center justify-center gap-3'>
            <Search/>
            <Filter/>
        </div>
    </div>
  )
}
