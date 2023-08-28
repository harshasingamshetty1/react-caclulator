import React from 'react'
import { ACTIONS } from './App'

export default function DigitButton({dispatch, digit}) {
  return (
    <div>
        <button  onClick={()=>dispatch(ACTIONS.ADD_DIGIT, digit)}>{digit}</button>
    </div>
  )
}
