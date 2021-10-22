import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

import { PopulationStructure } from '@/types/PopulationStructure'
import { Series } from '@/types/Series'

interface Props {
  series: Series
}

export const Chart: VFC<Props> = ({ series }) => {
  const { result } = useResas<PopulationStructure>(
    'api/v1/population/composition/perYear?prefCode=13'
  )
  const pops = result?.data[0].data.map((item) => item.value)
  const categories = result?.data[0].data.map((item) => item.year.toString())

  const options: Highcharts.Options = {
    series: series,
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
