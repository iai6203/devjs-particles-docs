import React from 'react'
import { mapper } from '../../utils/language'
import type { GetServerSidePropsContext } from 'next'

// hooks
import useDocument from '../../hooks/useDocument'
import useTranslation from 'next-translate/useTranslation'

// components
import DocLayout from '../../layouts/DocLayout'
import Markdown from '../../components/Markdown'

// ts
interface Props {
  titleKey: string
  url: string
}

const Document = ({ titleKey, url }: Props) => {
  const { t } = useTranslation('')
  const { data } = useDocument({ url, deps: [url] })

  const title = t(`common:${titleKey}`)

  return <DocLayout title={title}>{data && <Markdown body={data} />}</DocLayout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const locale = ctx.locale
  const { document } = ctx.query
  const url = `/static/posts/${locale}/${document}.md`

  return {
    props: {
      titleKey: mapper[document as string],
      url,
    },
  }
}

export default Document
