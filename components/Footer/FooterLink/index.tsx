import React from 'react'

// components
import Link from 'next/link'

// styling
import cn from 'classnames'

// ts
interface Props {
  href: string
  locale?: string
  children: string
}

const Index = ({ href, locale, children }: Props) => {
  return (
    <Link href={href} locale={locale} passHref>
      <a className={cn('text-xs underline underline-offset-2')}>{children}</a>
    </Link>
  )
}

export default Index
