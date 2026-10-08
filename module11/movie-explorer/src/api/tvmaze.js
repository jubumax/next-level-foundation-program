const BASE_URL = 'https://api.tvmaze.com'


async function get(path) {
  const res = await fetch(BASE_URL + path)

  if (!res.ok) {
    throw new Error('TVMaze responded with ' + res.status)
  }

  return res.json()
}


export function getAllShows(page = 0) {
  return get(`/shows?page=${page}`)
}


export async function searchShows(query) {
  const matches = await get(`/search/shows?q=${encodeURIComponent(query)}`)
  return matches.map((match) => match.show)
}


export function getShowById(id) {
  return get(`/shows/${id}`)
}
