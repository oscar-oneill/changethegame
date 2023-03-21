import React from 'react'
import logo from '../images/rocafella.png'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  
  return (
    <div className={styles.navigation}>
      <span className={styles.title}><a href="/">Change The Game</a></span>
      <img className={styles.logo} src={logo} alt="rocafella-logo"/>
    </div>
  )
}

export default Navigation