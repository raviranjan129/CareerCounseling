import React from 'react'
import Header from './Header'
import { Home } from './Home'

export default function Layout() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Home/>
    </div>
  )
}
