import React from 'react'

// components
import Link from 'next/link'

// styling
import cn from 'classnames'

const Index = () => {
  return (
    <Link href="/" passHref>
      <a className={cn('flex flex-col items-center')}>
        <span className={cn('text-sm font-semibold leading-4')}>devJS</span>
        <span className={cn('text-base font-bold uppercase leading-5')}>
          Particles
        </span>
      </a>
    </Link>
  )
}

export default Index
