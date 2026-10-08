import { Link } from 'react-router-dom'
import { GithubIcon } from '../ui/Icons'


export default function Footer() {

  return (
    <footer className="border-t border-cream/10 bg-velvet-800/40">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <p className="font-display text-lg">MovieExplorer</p>
          <p className="mt-1 text-sm text-cream/55">
            Show data from the TVMaze API.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-cream/55">
          <Link to="/movies" className="transition-colors hover:text-cream">
            Browse
          </Link>
          <a
            href="https://github.com/jubumax"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-cream"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
        
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/40">
        © 2026 MovieExplorer - @jubumax
      </div>
      
    </footer>
  )
}
