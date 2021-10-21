import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

interface PrefList {
  prefCode: number
  prefName: string
}

export const Prefectures: VFC = () => {
  const { result } = useResas<PrefList>('api/v1/prefectures')

  return (
    <>
      {result?.map(({ prefCode, prefName }) => {
        return <p key={prefCode}>{prefName}</p>
      })}
    </>
  )
}
