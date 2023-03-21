import React from 'react'
import Quiz from '../Components/Quiz'
import varsity from '../utilities/varsity'

const Varsity = () => {
  return (
    <Quiz quiz={varsity} time={75}/>
  )
}

export default Varsity