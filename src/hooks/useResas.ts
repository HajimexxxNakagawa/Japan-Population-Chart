import axios from 'axios'
import useSWR from 'swr'

export const useResas = <T>(path: string) => {
  interface Res {
    result: T[]
  }

  const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY

  const fetcher = (url: string) =>
    axios
      .get<Res>(url, {
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
