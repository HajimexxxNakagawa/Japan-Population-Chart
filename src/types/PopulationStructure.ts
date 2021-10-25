/// RESAS API 「人口構成」のデータ型
/// see: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export interface PopulationStructure {
  boundaryYear: number
  data: { label: string; data: PopulationData[] }[]
}

type PopulationData = { year: number; value: number }
