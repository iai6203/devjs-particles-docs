import React from 'react'

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import FooterExternalLink from '../FooterExternalLink'

// styling
import cn from 'classnames'

const Index = () => {
  const { t } = useTranslation('')

  return (
    <div>
      <h6 className={cn('text-sm font-semibold')}>{t('common:Contribute')}</h6>
      <ul className={cn('mt-1')}>
        <li>
          <FooterExternalLink href="https://github.com/iai6203/devjs-particles">
            {t('common:Fork on Github')}
          </FooterExternalLink>
        </li>
        <li>
          <FooterExternalLink href="https://github.com/iai6203/devjs-particles-docs">
            {t('common:Fork on Website')}
          </FooterExternalLink>
        </li>
        <li>
          <FooterExternalLink href="https://github.com/iai6203/devjs-particles/issues">
            {t('common:Create an Issue')}
          </FooterExternalLink>
        </li>
      </ul>
    </div>
  )
}

export default Index
