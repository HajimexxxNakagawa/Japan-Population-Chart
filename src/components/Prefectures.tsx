import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

interface Prefecture {
  prefCode: number
  prefName: string
}

export const Prefectures: VFC = () => {
  const { result } = useResas<Prefecture[]>('api/v1/prefectures')

  return (
    <>
      {result?.map(({ prefCode, prefName }) => {
        return <p key={prefCode}>{prefName}</p>
      })}
    </>
  )
}
