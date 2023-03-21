import React from 'react'
import Quiz from '../Components/Quiz'
import { dynasty } from '../utilities/data'

const Dynasty = () => {
  return (
    <Quiz quiz={dynasty} time={75}/>
  )
}

export default Dynasty