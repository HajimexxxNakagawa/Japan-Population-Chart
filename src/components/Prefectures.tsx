import React, { VFC } from 'react'

import { useResas } from '@/hooks/useResas'

import styles from '@/styles/CheckBoxList.module.css'

interface Prefecture {
  prefCode: number
  prefName: string
}

export const Prefectures: VFC = () => {
  const { result } = useResas<Prefecture[]>('api/v1/prefectures')

  return (
    <div className={styles.list}>
      {result?.map(({ prefCode, prefName }) => {
        return <CheckBox key={prefCode} label={prefName} />
      })}
    </div>
  )
}

const CheckBox = ({ label }: { label: string }) => {
  return (
    <label htmlFor={label}>
      <input id={label} type="checkbox" name={label} />
      {label}
    </label>
  )
}
