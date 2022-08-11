import React from 'react'

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import DocLayout from '../../layouts/DocLayout'
import Link from 'next/link'

// styling
import cn from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

// ts
interface DemoLinkProps {
  title: string
  href: string
}

const DemoLink = ({ title, href }: DemoLinkProps) => {
  return (
    <li className={cn('group', 'hover:cursor-pointer')}>
      <Link href={href} passHref>
        <a className={cn('flex gap-4 items-center')}>
          <div
            className={cn(
              'p-2 text-black/50 rounded shadow transition-colors duration-200',
              'group-hover:text-white group-hover:bg-sky-400'
            )}
          >
            <ChevronRightIcon className={cn('w-5 h-5')} />
          </div>
          <span
            className={cn(
              'text-black/50 text-lg font-semibold transition-colors duration-200',
              'group-hover:text-black'
            )}
          >
            {title}
          </span>
        </a>
      </Link>
    </li>
  )
}

const Index = () => {
  const { t } = useTranslation('')

  return (
    <DocLayout title={t('common:Demo')}>
      <h2 className={cn('my-6 text-3xl font-bold')}>{t('common:Demo')}</h2>
      <ul className="flex flex-col gap-4">
        <DemoLink title="Particles" href="/demo/particles" />
        <DemoLink title="Ball" href="/demo/ball" />
        <DemoLink title="Web" href="/demo/web" />
      </ul>
    </DocLayout>
  )
}

export default Index
