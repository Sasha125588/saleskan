import React from 'react'
import Balance from './balance/Balance'
import Income from './income/Income'
import Expense from './expense/Expense'
import Tax from './tax/Tax'

export default function Stats() {
  return (
    <div className='pt-9 px-9  '>
        <div className='bg-[#f7f7f7] rounded-lg py-4 border border-[#f3f3f3] flex justify-between items-center px-5'>
            <div className='w-2/6'>
                <Balance/>
            </div>
            <div className='flex justify-center items-center w-4/6'>
                <Income/>
                <Expense/>
                <Tax/>
            </div>
        </div>
    </div>
  )
}
