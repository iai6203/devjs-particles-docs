import React from 'react'
import { NextSeo } from 'next-seo'

// components
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// ts
interface Props {
  title: string
  children?: React.ReactNode
}

const BaseLayout = ({ title, children }: Props) => {
  return (
    <>
      <NextSeo title={title} />
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout
