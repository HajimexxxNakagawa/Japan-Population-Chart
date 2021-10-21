import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

interface PrefList {
  prefCode: number
  prefName: string
}

export const Prefectures: VFC = () => {
  const { result, error } = useResas<PrefList>('api/v1/prefectures')

  return (
    <>
      {result?.map((item) => {
        return <p key={item.prefCode}>{item.prefName}</p>
      })}
    </>
  )
}
