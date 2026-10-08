import { Link } from 'react-router-dom'

export default function NotFound() {

  return (

    <section className="mx-auto flex max-w-shell flex-col items-center px-5 py-32 text-center">

      <p className="font-display text-6xl text-marquee">404</p>
      <h1 className="mt-4 font-display text-3xl">This page is not in the listing</h1>
      <p className="mt-3 max-w-sm text-cream/60">
        The link you followed does not exist. Head back and pick a title instead.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-full bg-marquee px-7 py-3 font-medium text-velvet-900 transition-colors hover:bg-cream"
      >
        Back to home
      </Link>

    </section>
  )
}
