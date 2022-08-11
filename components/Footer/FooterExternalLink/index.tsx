import React from 'react'

// styling
import cn from 'classnames'

// ts
interface Props {
  href: string
  children: string
}

const Index = ({ href, children }: Props) => {
  return (
    <a rel="noreferrer" href={href} className={cn('text-xs underline underline-offset-2')} target="_blank">
      {children}
    </a>
  )
}

export default Index
