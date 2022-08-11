import React from 'react'

// styling
import cn from 'classnames'

interface Props {
  [key: string]: any
}

export const Heading1 = ({ children }: Props) => {
  return <h1 className={cn('my-6 text-6xl font-bold')}>{children}</h1>
}

export const Heading2 = ({ children }: Props) => {
  return <h2 className={cn('my-4 text-4xl font-bold')}>{children}</h2>
}

export const Heading3 = ({ children }: Props) => {
  return <h3 className={cn('my-3 text-3xl font-bold')}>{children}</h3>
}

export const Heading4 = ({ children }: Props) => {
  return <h4 className={cn('my-2 text-2xl font-bold')}>{children}</h4>
}

export const Heading5 = ({ children }: Props) => {
  return <h5 className={cn('my-1 text-lg font-bold')}>{children}</h5>
}

export const Heading6 = ({ children }: Props) => {
  return <h6 className={cn('text-black/50 text-base font-bold')}>{children}</h6>
}
