import React from 'react'

// context
import NavProvider from "../../context/NavProvider"

// components
import Logo from '../Logo'
import Hamburger from './Hamburger'
import SideNav from './SideNav'

// styling
import cn from 'classnames'

const Index = () => {
  return (
    <NavProvider>
      <nav className={cn('fixed top-0 left-0 right-0 bg-white shadow z-40')}>
        <div
          className={cn(
            'container mx-auto py-6 flex justify-between items-center'
          )}
        >
          <Logo />
          <Hamburger />
        </div>
      </nav>
      <SideNav />
    </NavProvider>
  )
}

export default React.memo(Index)
