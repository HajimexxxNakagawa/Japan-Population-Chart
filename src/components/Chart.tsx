import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

type PopulationData = { year: number; value: number }

interface PopulationStructure {
  boundaryYear: number
  data: { label: string; data: PopulationData[] }[]
}

export const Chart: VFC = () => {
  const { result } = useResas<PopulationStructure>(
    'api/v1/population/composition/perYear?prefCode=13'
  )
  const pops = result?.data[0].data.map((item) => item.value)
  const categories = result?.data[0].data.map((item) => item.year.toString())

  const options: Highcharts.Options = {
    series: [{ type: 'line', data: pops, name: '東京' }],
    title: {
      style: {
        display: 'none',
      },
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
  }
  if (!result) return <></>

  return (
    <div style={{ width: `100%`, maxWidth: `800px` }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
