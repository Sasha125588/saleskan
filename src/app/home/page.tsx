import Dashboards from '@/components/dashboards/Dashboards'
import Header from '@/components/header/Header'
import Overview from '@/components/overview/Overview'
import Stats from '@/components/stats/Stats'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Overview/>
      <Stats/>
      <Dashboards/>
    </div>
  )
}
