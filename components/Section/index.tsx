import React from 'react'

// styling
import cn from 'classnames'

// ts
interface Props {
  isFirst?: boolean
  children?: React.ReactNode
}

// classes
const isFirstClass = cn('pt-28')

const Index = ({ isFirst = false, children }: Props) => {
  return (
    <section
      className={cn({
        [isFirstClass]: isFirst,
      })}
    >
      {children}
    </section>
  )
}

export default Index
