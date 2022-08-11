import React from 'react'
import axios from "axios"

// ts
interface Props {
  url: string
  deps?: string[]
}

const useDocument = ({ url, deps = [] }: Props) => {
  const [data, setData] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<unknown>(null)

  React.useEffect(() => {
    const getData = async () => {
      setData(null)
      setLoading(false)
      setError(null)

      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, deps)

  return { data, loading, error }
}

export default useDocument
