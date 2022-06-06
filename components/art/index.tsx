import { IArt } from '@/interfaces/index'
import React from 'react'
import { Hero, Desc, Title } from '@/components/index'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Art: React.FC<IProps> = ({ art }) => {
  return (
    <div>
      <div className={css.header}>
        <Hero images={art.images} key={art.name} />
        <Title art={art} />
      </div>
      <Desc desc={art.description} year={art.year} />
    </div>
  )
}
