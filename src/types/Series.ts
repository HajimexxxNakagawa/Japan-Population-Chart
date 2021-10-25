/// Highchartsに流し込むデータの型
/// 実際に使うときはこんな感じ：{type: 'line', data: [1, 2, 3], name: 'データラベル'}
export type Series = Highcharts.SeriesOptionsType[] | never[]
