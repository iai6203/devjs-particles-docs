import React from 'react'
import { NextSeo } from "next-seo"

// components
import Nav from "../components/Nav"

// styling
import cn from 'classnames'

// ts
interface Props {
  title: string
  children?: React.ReactNode
}

const DocLayout = ({ title, children }: Props) => {
  return (
    <>
      <NextSeo title={title} />
      <Nav />
      <section className={cn('pt-28')}>
        <div className={cn('container mx-auto')}>{children}</div>
      </section>
    </>
  )
}

export default DocLayout
