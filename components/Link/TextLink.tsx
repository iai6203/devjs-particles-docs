import React from 'react'

// hooks
import { useRouter } from 'next/router'

// components
import Link from 'next/link'

// styling
import cn from 'classnames'

// ts
interface Props {
  href: string
  className?: string
  children: string
}

const TextLink = ({ href, className, children }: Props) => {
  const { locale } = useRouter()

  return (
    <Link href={href} locale={locale} passHref>
      <a
        className={cn(
          'px-7 py-4 text-white text-sm rounded bg-sky-400 shadow transition-colors duration-200',
          'hover:bg-sky-500',
          className
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default TextLink
