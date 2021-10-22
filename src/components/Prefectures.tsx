import React, { VFC } from 'react'

import type { Prefecture } from '@/types/Prefecture'

import styles from '@/styles/Prefectures.module.css'

export const CheckBox = ({ label }: { label: string }) => {
  return (
    <label htmlFor={label} className={styles.label}>
      <input id={label} type="checkbox" name={label} />
      {label}
    </label>
  )
}

interface Props {
  prefList: Prefecture[]
}

export const Prefectures: VFC<Props> = ({ prefList }) => {
  return (
    <div className={styles.container}>
      <span>
        <strong>都道府県</strong>
      </span>
      <div className={styles.list}>
        {prefList.map(({ prefCode, prefName }) => {
          return <CheckBox key={prefCode} label={prefName} />
        })}
      </div>
    </div>
  )
}
