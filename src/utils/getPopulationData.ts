import axios from 'axios'
interface Res<T> {
  result: T
}
type PopulationData = { year: number; value: number }
interface PopulationStructure {
  boundaryYear: number
  data: { label: string; data: PopulationData[] }[]
}
export const getPopulationData = async (prefCode: number, prefName: string) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`
  const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY

  const data = axios
    .get<Res<PopulationStructure>>(url, {
      headers: {
        'X-API-KEY': apiKey as string,
      },
    })
    .then((res) => res.data)
    .then((res) => {
      const pops = res.result.data[0].data.map((item) => item.value)
      const newData: Highcharts.SeriesOptionsType = {
        type: 'line',
        data: pops,
        name: prefName,
      }
      return newData
    })

  return data
}
