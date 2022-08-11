import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

// styling
import cn from 'classnames'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// ts
interface Props {
  [key: string]: any
}

const Code = ({ node, inline, className, children, ...props }: Props) => {
  const match = /language-(\w+)/.exec(className || '')

  if (!match) {
    return (
      <code className={cn('mr-1 px-2 py-1 rounded bg-black/5')}>
        {children}
      </code>
    )
  }

  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={materialLight}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default Code
