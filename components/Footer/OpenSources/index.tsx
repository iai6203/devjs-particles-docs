import React from 'react'

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import FooterExternalLink from "../FooterExternalLink";

// styling
import cn from 'classnames'

const Index = () => {
  const { t } = useTranslation('')

  return (
    <div>
      <h6 className={cn('text-sm font-semibold')}>{t('common:Open Source')}</h6>
      <ul className={cn('mt-1')}>
        <li>
          <FooterExternalLink
            href="https://github.com/iai6203/devjs-particles"
          >
            {t('common:Source on Github')}
          </FooterExternalLink>
        </li>
        <li>
          <FooterExternalLink
            href="https://github.com/iai6203/devjs-particles/issues"
          >
            {t('common:Issues')}
          </FooterExternalLink>
        </li>
        <li>
          <FooterExternalLink
            href="https://github.com/iai6203/devjs-particles/pulls"
          >
            {t('common:Pull Requests')}
          </FooterExternalLink>
        </li>
      </ul>
    </div>
  )
}

export default Index
