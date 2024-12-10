import { Col, Statistic } from 'antd'
import React from 'react'
import expense from '../../../assets/expense.svg'
import Image from 'next/image'


export default function Expense() {
  return (
    <div className='flex items-center'>
      <Image className='w-[45%] h-[45%]' src={expense} width={50} height={50} alt="Expense icon"/>
      <Col span={12}>
          <Statistic className='font-bold text-nowrap' title="Total Income" value={"$265,172"}/>
      </Col>
    </div>
  )
}
