import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// components
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './Elements/Heading'
import Paragraph from "./Elements/Paragraph"
import Code from "./Elements/Code"

// ts
interface Props {
  body: string
}

const Index = ({ body }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        p: Paragraph,
        code: Code,
      }}
    >
      {body}
    </ReactMarkdown>
  )
}

export default Index
