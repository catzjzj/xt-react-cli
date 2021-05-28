import React, { Component } from 'react'
import cssObj from '../common/css/ttt.scss'
interface ObjType {
  name: string
}
const TestApp: React.FC<ObjType> = (props) => {
  const aaad = () => {

  }
  return (
    <div className={cssObj.asd}>
      <p onClick={aaad} >111
      
      </p>
      <div className='ddd'>

      </div>
    </div>
  )

}

export default TestApp