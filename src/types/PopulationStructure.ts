type PopulationData = { year: number; value: number }

export interface PopulationStructure {
  boundaryYear: number
  data: { label: string; data: PopulationData[] }[]
}
