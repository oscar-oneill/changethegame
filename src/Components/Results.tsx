import React from 'react'
import styles from '../styles/Results.module.css'
import { setReaction } from '../utilities/functions'

const Results = ({ score, closeDisplay }: any) => {
    const image = setReaction(score);

    return (
        <div className={styles['primary-container']}>
            <div className={styles.modal}> 
                <div className={styles['result-info']}>You scored {score}%</div>   
                <div className={styles['result-gif-container']}>
                    <img className={styles['result-gif']} src={image} alt="reaction"/>
                </div>
                <button onClick={() => closeDisplay(false)} className={styles.button}>Close</button>
            </div>
        </div>
    )
}

export default Results