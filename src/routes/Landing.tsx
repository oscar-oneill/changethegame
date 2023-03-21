import { useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import styles from '../styles/Landing.module.css'

export const Landing = () => {
  const { levels } = useContext(AppContext)
  const [levelSelected, setLevelSelected] = useState<string | null>('')

  const submit = (e: React.BaseSyntheticEvent<Event, EventTarget & Element, EventTarget>) => {
    e.preventDefault();
    (window as Window).location = `/${levelSelected?.toLowerCase()}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span>Select a level to test your knowledge on Roc-A-Fella Records.</span>

        <div className={styles['selection-container']}>
          {levels.map((level: any, i: any) => (
            <button key={i} onClick={() => setLevelSelected(level)} className={styles.selection}>{level}</button>
          ))}
        </div>

        <button onClick={(event) => submit(event)} disabled={levelSelected === null || undefined} className={styles.submit}>Select</button>
      </div>
    </div>
  )
}