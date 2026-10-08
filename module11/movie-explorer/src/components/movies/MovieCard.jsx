import { CalendarIcon, StarIcon } from '../ui/Icons'
import { formatRating, getYear } from '../../utils/format'


export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium || show.image?.original
  const year = getYear(show.premiered)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-cream/10 bg-velvet-800/55 shadow-card">

      <div className="relative aspect-[2/3] overflow-hidden bg-velvet-700">
        {poster ? (
          <img
            src={poster}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center px-4 text-center font-display text-3xl text-cream/25">
            {show.name?.[0] ?? '?'}
          </div>
        )}

        {show.genres?.length ? (
          <span className="absolute left-3 top-3 rounded-full bg-velvet-900/85 px-3 py-1 text-xs text-cream/75">
            {show.genres[0]}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">

        <h3 className="line-clamp-2 font-display text-lg leading-snug">{show.name}</h3>

        <div className="flex items-center gap-4 text-sm text-cream/60">

          <span className="flex items-center gap-1.5">
            <StarIcon className="h-4 w-4 text-marquee" />
            {formatRating(show.rating?.average)}
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" />
            {year ?? '—'}
          </span>

        </div>

        <button
          type="button"
          onClick={() => onSelect(show)}
          className="mt-auto rounded-lg border border-cream/15 py-2.5 text-sm font-medium text-cream transition-colors group-hover:border-marquee group-hover:bg-marquee group-hover:text-velvet-900"
        >
          See details
        </button>
        
      </div>
      
    </article>
  )
}
