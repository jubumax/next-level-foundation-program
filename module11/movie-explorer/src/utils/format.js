export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '').trim()
}

export function getYear(date) {
  if (!date) return null
  return date.slice(0, 4)
}

export function formatRating(rating) {
  if (rating === null || rating === undefined) return 'Not rated'
  return rating.toFixed(1)
}

export function formatDate(date) {
  if (!date) return 'Unknown'
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function getNetwork(show) {
  return show.network?.name || show.webChannel?.name || null
}
