import { Col, Statistic } from 'antd'
import Image from 'next/image'
import React from 'react'
import tax from '../../../assets/tax.svg'


export default function Tax() {
  return (
    <div className='flex items-center'>
      <Image className='w-[45%] h-[45%]' src={tax} width={50} height={50} alt="Tax icon"/>
      <Col span={12}>
          <Statistic className='font-bold text-nowrap' title="Total Income" value={"$265,172"} />
      </Col>
    </div>
  )
}
