import { Col, Statistic } from 'antd'
import Image from 'next/image'
import React from 'react'
import income from '../../../assets/income.svg'

export default function Income() {
  return (
    <div className='flex items-center'>
            <Image className='w-[45%] h-[45%]' src={income} width={50} height={50} alt="Income icon"/>
            <Col span={12}>
                <Statistic className='font-bold text-nowrap' title="Total income" value={"$265,172"} />
            </Col>
    </div>
  )
}
