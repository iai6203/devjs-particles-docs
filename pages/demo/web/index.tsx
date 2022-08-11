import React from 'react'
import { initWeb } from "devjs-particles"

// hooks
import useTranslation from 'next-translate/useTranslation'

// components
import DemoLayout from '../../../layouts/DemoLayout'

// styling
import cn from 'classnames'

const Index = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  React.useEffect(() => {
    let effect: any = null

    if (containerRef.current) {
      initWeb({
        container: containerRef.current,
        distance: 150,
      })
    }

    return () => {
      effect?.destroy()
    }
  }, [])

  return (
    <DemoLayout title={`Web ${t('common:Demo')}`}>
      <div
        ref={containerRef}
        id="container"
        className={cn('fixed top-0 left-0 right-0 bottom-0 w-full h-full')}
      />

      <div
        className={cn(
          'absolute top-1/2 left-1/2 w-full flex flex-col gap-4 items-center -translate-x-1/2 -translate-y-1/2 select-none'
        )}
      >
        <h2 className={cn('text-4xl font-bold')}>
          {t('common:Move Your Mouse')}
        </h2>
        <p className={cn('text-black/50 font-semibold')}>
          {t('common:Not Work Properly On Mobile')}
        </p>
      </div>
    </DemoLayout>
  )
}

export default Index
