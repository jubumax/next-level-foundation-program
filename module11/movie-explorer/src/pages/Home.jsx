import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '../components/ui/Icons'
import { getAllShows } from '../api/tvmaze'
import { formatRating, getYear } from '../utils/format'


export default function Home() {
  const [picks, setPicks] = useState([])

  useEffect(() => {
    let cancelled = false

    getAllShows()
      .then((shows) => {
        if (cancelled) return
        const topRated = [...shows]
          .filter((show) => show.image && show.rating?.average)
          .sort((a, b) => b.rating.average - a.rating.average)
          .slice(0, 5)
        setPicks(topRated)
      })
      .catch(() => setPicks([]))

    return () => {
      cancelled = true
    }
  }, [])


  return (
    <>

      <section className="spotlight relative overflow-hidden">

        <div className="curtain-edge absolute inset-x-0 top-0 h-3 opacity-60" />
          <div className="mx-auto max-w-shell px-5 pb-20 pt-20 sm:pt-28">
            <div className="max-w-2xl">

              <p className="text-sm text-marquee">Powered by the TVMaze library</p>

              <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Discover movies you would have scrolled past.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/65 sm:text-lg">
                Explore and discover your favorite movies from around the world...
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/movies"
                  className="rounded-full bg-marquee px-8 py-3.5 font-medium text-velvet-900 transition-colors hover:bg-cream"
                >
                  Explore now
                </Link>

                <Link
                  to="/movies"
                  className="rounded-full border border-cream/20 px-8 py-3.5 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
                >
                  Search by title
                </Link>

            </div>
          </div>
        </div>

      </section>


      <section className="mx-auto max-w-shell px-5 pb-24">

        <div className="flex items-end justify-between gap-6 border-t border-cream/10 pt-10">

          <div>
            <h2 className="font-display text-3xl">Highest rated right now</h2>
            <p className="mt-2 text-sm text-cream/55">
              Pulled from the first page of the library and sorted by audience score.
            </p>
          </div>

          <Link
            to="/movies"
            className="hidden shrink-0 text-sm text-marquee transition-colors hover:text-cream sm:block"
          >
            See all titles
          </Link>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {picks.length
            ? picks.map((show) => (
              <Link
                key={show.id}
                to="/movies"
                className="group overflow-hidden rounded-xl border border-cream/10 bg-velvet-800/50"
              >

                <div className="aspect-[2/3] overflow-hidden bg-velvet-700">
                  <img
                    src={show.image.medium}
                    alt={`Poster for ${show.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-3">
                  <p className="line-clamp-1 text-sm text-cream/90">{show.name}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-cream/50">
                    <StarIcon className="h-3.5 w-3.5 text-marquee" />
                    {formatRating(show.rating.average)}
                    <span className="text-cream/25">·</span>
                    {getYear(show.premiered) ?? '—'}
                  </p>
                </div>

              </Link>
            ))
            : Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[2/3] rounded-xl border border-cream/8 bg-velvet-800/40"
              />
            ))}
            
        </div>

      </section>
    </>
  )
}
