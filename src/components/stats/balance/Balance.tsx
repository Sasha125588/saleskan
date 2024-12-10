import { ArrowUpOutlined } from '@ant-design/icons'
import { Col, Row, Statistic } from 'antd'
import React from 'react'

export default function Balance() {
  return (
    <div>
        <Row gutter={35} className='flex'>
            <Col span={12}>
                <Statistic className='font-bold text-nowrap' title="Total Balance Your Company" value={"$124,254.62"} valueStyle={{fontSize: 35}} />
            </Col>
            <Col span={12} className='content-end '>
            <div className='flex'>
                <Statistic
                className='font-semibold'
                    title="Compare from last year"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600', fontSize: 18, }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                    />
            </div>
            </Col>
        </Row>
    </div>
  )
}
