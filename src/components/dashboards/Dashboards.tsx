import React from 'react'
import { Activity } from './activity/Activity'
import AllStock from './all-stock/AllStock'
import Employees from './employees/Employees'

export default function Dashboards() {
  return (
    <div className='flex pt-6 px-9 gap-6'>
        <div className='w-4/6'>
            <Activity/>
        </div>
        <div className='w-2/6'>
            <AllStock/>
            <Employees/>
        </div>
    </div>
  )
}
