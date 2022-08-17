import React from 'react'
import { useRouter } from 'next/router'

const usePageLoading = () => {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = React.useState<boolean>(false)

  const handleRouteChangeStart = () => {
    setIsPageLoading(true)
  }
  const handleRouteChangeComplete = () => {
    setIsPageLoading(false)
  }
  const handleRouteChangeError = () => {
    setIsPageLoading(false)
  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isPageLoading }
}

export default usePageLoading
