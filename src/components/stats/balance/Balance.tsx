import { ArrowUpOutlined } from '@ant-design/icons'
import { Col, Row, Statistic } from 'antd'
import React from 'react'

export default function Balance() {
  return (
    <div>
        <Row gutter={16}>
            <Col span={12}>
                <Statistic className='font-bold text-xl  align-bottom' title="Total Balance Your Company" value={"$124,254.62"} valueStyle={{fontSize: 30}} />
            </Col>
            <Col span={10}>
            <div className='flex'>
                <Statistic
                className=' font-semibold'
                    title="Compare from last year"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600', fontSize: 20, }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                    />
            </div>
            </Col>
        </Row>

    </div>
  )
}
