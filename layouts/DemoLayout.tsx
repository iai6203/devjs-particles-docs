import React from 'react'
import { NextSeo } from 'next-seo'

// components
import Nav from '../components/Nav'

// styling
import cn from 'classnames'

// ts
interface Props {
  title: string
  children?: React.ReactNode
}

const DemoLayout = ({ title, children }: Props) => {
  return (
    <>
      <NextSeo title={title} />
      <Nav />
      <div className={cn('relative w-screen h-screen overflow-hidden')}>
        {children}
      </div>
    </>
  )
}

export default DemoLayout
