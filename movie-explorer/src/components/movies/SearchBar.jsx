import { CloseIcon, SearchIcon } from '../ui/Icons'


export default function SearchBar({ value, onChange }) {

  return (
    <div className="relative">

      <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cream/40" />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a movie…"
        aria-label="Search for a movie"
        className="w-full rounded-full border border-cream/12 bg-velvet-800/70 py-4 pl-14 pr-14 text-cream placeholder:text-cream/35 focus:border-marquee/60 focus:outline-none"
      />
      
      {value ? (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-5 top-1/2 -translate-y-1/2 text-cream/45 transition-colors hover:text-cream"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      ) : null}
      
    </div>
  )
}
