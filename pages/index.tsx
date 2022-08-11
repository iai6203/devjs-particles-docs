import React from 'react'
import useTranslation from 'next-translate/useTranslation'

// components
import BaseLayout from '../layouts/BaseLayout'
import Section from '../components/Section'
import TextLink from '../components/Link/TextLink'
import DownloadLink from '../components/Link/DownloadLink'

// styling
import cn from 'classnames'

const Home = () => {
  const { t } = useTranslation('')

  return (
    <BaseLayout title="devJS-Particles">
      <Section isFirst>
        <div className={cn('container mx-auto')}>
          <h2 className={cn('text-6xl font-bold leading-[4rem]')}>
            {t('home:heading')
              .split(' ')
              .map((txt, idx) => (
                <React.Fragment key={idx}>
                  {txt}
                  <br />
                </React.Fragment>
              ))}
          </h2>
          <div className={cn('mt-10 flex gap-2')}>
            <TextLink href="/docs/introduction">
              {t('common:Get Started')}
            </TextLink>
            <DownloadLink href="/static/lib/particles.min.js">
              {t('common:Download')}
            </DownloadLink>
          </div>
        </div>
      </Section>
    </BaseLayout>
  )
}

export default Home
