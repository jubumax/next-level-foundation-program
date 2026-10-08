export default function Message({ title, children, action }) {

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-cream/10 bg-velvet-800/60 px-8 py-12 text-center">

      <h3 className="font-display text-2xl text-cream">{title}</h3>

      {children ? <p className="mt-3 text-sm leading-relaxed text-cream/60">{children}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
      
    </div>
  )

}
