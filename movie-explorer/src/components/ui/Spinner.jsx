export default function Spinner({ label = 'Loading shows…' }) {

  return (
    <div className="flex flex-col items-center gap-4 py-24 text-cream/60">

      <span className="h-9 w-9 animate-spin rounded-full border-2 border-cream/15 border-t-marquee" />

      <p className="text-sm">{label}</p>

    </div>
  )
}
