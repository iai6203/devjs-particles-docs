import React from 'react'

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import NavItem from './NavItem'

// styling
import cn from 'classnames'

const Index = () => {
  const { t } = useTranslation()

  return (
    <ul className={cn('flex flex-col gap-6')}>
      <NavItem href="/docs/introduction" text={t('common:Introduction')} />
      <NavItem href="/docs/example" text={t('common:Example')} />
      <hr />
      <NavItem href="/demo" text={t('common:Demo')} />
    </ul>
  )
}

export default React.memo(Index)
