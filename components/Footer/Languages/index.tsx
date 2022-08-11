import React from 'react'
import locales from '../../../locales/Locales'

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import FooterLink from '../FooterLink'

// styling
import cn from 'classnames'

const Index = () => {
  const { t } = useTranslation('')

  return (
    <div>
      <h6 className={cn('text-sm font-semibold')}>{t('common:Language')}</h6>
      <ul className={cn('mt-1')}>
        {locales.map(({ locale, text }) => (
          <li key={locale}>
            <FooterLink href="/" locale={locale}>
              {text}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index
