import React from 'react'

// components
import Languages from './Languages'
import OpenSources from "./OpenSources"
import Contributes from "./Contributes"

// styling
import cn from 'classnames'

const Index = () => {
  return (
    <footer className={cn('mt-10 bg-[#f2edf5]')}>
      <div className={cn('container mx-auto py-10 grid gap-10 grid-cols-3')}>
        <Languages />
        <OpenSources />
        <Contributes />
      </div>
    </footer>
  )
}

export default Index
