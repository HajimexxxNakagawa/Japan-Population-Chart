import { useState } from 'react'

import type { Series } from '@/types/Series'

import { getPopulationData } from '@/utils/getPopulationData'

export const useSeries = (): [
  Series,
  (prefCode: number, prefName: string) => void,
  (prefCode: number, prefName: string) => void
] => {
  const [series, setSeries] = useState<Series>([])

  const addSeries = (prefCode: number, prefName: string) => {
    getPopulationData(prefCode, prefName).then((newData) => {
      if (series) {
        setSeries([...series, newData])
      } else {
        setSeries([newData])
      }
    })
  }

  const deleteSeries = (prefCode: number, prefName: string) => {
    setSeries((series) => series.filter((item) => item.name !== prefName))
  }

  return [series, addSeries, deleteSeries]
}
