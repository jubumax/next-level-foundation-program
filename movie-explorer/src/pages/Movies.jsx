import { useState } from 'react'
import SearchBar from '../components/movies/SearchBar'
import MovieGrid from '../components/movies/MovieGrid'
import MovieModal from '../components/movies/MovieModal'
import Spinner from '../components/ui/Spinner'
import Message from '../components/ui/Message'
import useDebounce from '../hooks/useDebounce'
import useShows from '../hooks/useShows'


export default function Movies() {

  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const debouncedQuery = useDebounce(query)
  const { shows, status } = useShows(debouncedQuery)

  return (
    <>

      <section className="spotlight border-b border-cream/10">

        <div className="mx-auto max-w-shell px-5 py-14">

          <h1 className="font-display text-4xl sm:text-5xl">Browse the library</h1>
          <p className="mt-3 max-w-xl text-cream/60">
            Start typing a title and the grid updates as you go.
          </p>

          <div className="mt-8 max-w-2xl">
            <SearchBar value={query} onChange={setQuery} />
          </div>

        </div>

      </section>


      <section className="mx-auto max-w-shell px-5 py-12">

        {status === 'loading' ? <Spinner /> : null}

        {status === 'error' ? (
          <Message title="Could not reach TVMaze">
            Check your internet connection and search again.
          </Message>
        ) : null}

        {status === 'done' && shows.length === 0 ? (
          <Message title="No titles matched that search">
            Try a shorter keyword — for example “girls” instead of the full title.
          </Message>
        ) : null}

        {status === 'done' && shows.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-cream/50">
              {shows.length} {shows.length === 1 ? 'title' : 'titles'}
              {debouncedQuery.trim() ? ` for “${debouncedQuery.trim()}”` : ' in the library'}
            </p>
            <MovieGrid shows={shows} onSelect={setSelected} />
          </>
        ) : null}

      </section>

      <MovieModal show={selected} onClose={() => setSelected(null)} />
        
    </>
  )
}
