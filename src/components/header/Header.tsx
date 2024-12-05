import React from 'react'
import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'
import Profile from './profile/Profile'

export default function Header() {
  return (
    <div>
      <div className='flex justify-between items-center pt-4 pb-3 px-9 border-b-[1px] border-neutral-300'>
        <Logo/>
        <Navigation/>
        <Profile/>
      </div>
    </div>
  )
}
