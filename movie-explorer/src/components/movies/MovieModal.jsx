import { useEffect } from 'react'
import { CalendarIcon, CloseIcon, StarIcon } from '../ui/Icons'
import useLockScroll from '../../hooks/useLockScroll'
import { formatDate, formatRating, getNetwork, stripHtml } from '../../utils/format'


export default function MovieModal({ show, onClose }) {

  useLockScroll(Boolean(show))

  useEffect(() => {
    if (!show) return

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [show, onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const network = getNetwork(show)
  const summary = stripHtml(show.summary)

  const facts = [
    show.genres?.length ? ['Genres', show.genres.join(', ')] : null,
    network ? ['Network', network] : null,
    show.status ? ['Status', show.status] : null,
    show.runtime ? ['Runtime', `${show.runtime} min`] : null,
    show.language ? ['Language', show.language] : null,
  ].filter(Boolean)


  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-velvet-900/85 p-4 py-10 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={show.name}
      onClick={onClose}
    >

      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-cream/12 bg-velvet-800"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-velvet-900/80 text-cream transition-colors hover:bg-marquee hover:text-velvet-900"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="relative h-56 overflow-hidden bg-velvet-700 sm:h-72">

          {backdrop ? (
            <img src={backdrop} alt="" className="h-full w-full object-cover object-top" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-velvet-800 via-velvet-800/40 to-transparent" />

        </div>


        <div className="-mt-10 space-y-6 p-6 sm:p-8">

          <div>

            <h2 className="font-display text-3xl leading-tight sm:text-4xl">{show.name}</h2>

            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-cream/65">

              <span className="flex items-center gap-1.5">
                <StarIcon className="h-4 w-4 text-marquee" />
                {formatRating(show.rating?.average)}
              </span>

              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {formatDate(show.premiered)}
              </span>

            </div>

          </div>


          <div>

            <h3 className="font-display text-lg text-cream/90">Overview</h3>

            <p className="mt-2 max-w-prose text-sm leading-relaxed text-cream/70">
              {summary || 'No summary has been added for this title yet.'}
            </p>

          </div>


          {facts.length ? (
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-cream/10 pt-6 text-sm sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-cream/45">{label}</dt>
                  <dd className="text-right text-cream/85">{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}


          <div className="flex flex-wrap justify-end gap-3 border-t border-cream/10 pt-6">

            {show.officialSite ? (
              <a
                href={show.officialSite}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cream/15 px-5 py-2.5 text-sm transition-colors hover:border-cream/40"
              >
                Official site
              </a>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-marquee px-6 py-2.5 text-sm font-medium text-velvet-900 transition-colors hover:bg-cream"
            >
              Close
            </button>

          </div>

        </div>

      </div>
      
    </div>
  )
}
