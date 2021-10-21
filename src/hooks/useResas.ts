import axios from 'axios'
import useSWR from 'swr'

interface Res<T> {
  result: T[]
}

export const useResas = <T>(path: string) => {
  const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY

  const fetcher = (url: string) =>
    axios
      .get<Res<T>>(url, {
        headers: {
          'X-API-KEY': apiKey as string,
        },
      })
      .then((res) => res.data)

  const { data, error } = useSWR(
    `https://opendata.resas-portal.go.jp/${path}`,
    fetcher
  )
  const result = data?.result

  return { result, error }
}
