import React from 'react'

// styling
import cn from 'classnames'

// ts
interface Props {
  href: string
  children?: string
}

const DownloadLink = ({ href, children }: Props) => {
  return (
      <a
        href={href}
        download
        className={cn(
          'px-7 py-4 text-white text-sm rounded bg-indigo-400 shadow transition-colors duration-200',
          'hover:bg-indigo-500'
        )}
      >
        {children}
      </a>
  )
}

export default DownloadLink
