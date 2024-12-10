import React from 'react'
import Balance from './balance/Balance'
import Income from './income/Income'
import Expense from './expense/Expense'
import Tax from './tax/Tax'
import { Col, Row } from 'antd'

export default function Stats() {
  return (
    <div className='pt-9 px-9  '>
        <div className='bg-[#f7f7f7] rounded-lg py-4 border border-[#f3f3f3] flex justify-between items-center px-5 '>
            <div className=''>
                <Balance/>
            </div>
            <div className='flex justify-center items-center '>
              <Row gutter={16} className='gap-28 flex'>
                  <Col span={5}>
                    <Income/> 
                  </Col >
                  <Col span={5}>
                    <Expense/>

                  </Col>
                  <Col span={5}>
                    <Tax/>
                  
                  </Col>


              </Row>
            </div>
        </div>
    </div>
  )
}
