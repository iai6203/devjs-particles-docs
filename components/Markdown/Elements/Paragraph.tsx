import React from 'react'

// styling
import cn from 'classnames'

interface Props {
  [key: string]: any
}

const Paragraph = ({ children }: Props) => {
  return <p className={cn('text-black/75 text-sm')}>{children}</p>
}

export default Paragraph
