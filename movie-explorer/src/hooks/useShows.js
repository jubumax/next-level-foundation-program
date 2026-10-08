import { useEffect, useState } from 'react'
import { getAllShows, searchShows } from '../api/tvmaze'


export default function useShows(query) {

  const [shows, setShows] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const term = query.trim()
    let cancelled = false

    setStatus('loading')

    const request = term ? searchShows(term) : getAllShows()

    request
      .then((data) => {
        if (cancelled) return
        setShows(data)
        setStatus('done')
      })
      .catch(() => {
        if (cancelled) return
        setShows([])
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [query])

  return { shows, status }
}
