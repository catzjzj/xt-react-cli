
import React, { useContext } from 'react';
import {contextApp,setcontextApp} from '../hookState/appState'
import {withClickLog} from '../hoc/ClickLog'
export interface ContextDemoDProps {
  ClickLog:(name)=> void
}
const ContextDemoD:React.FC<ContextDemoDProps> = ({ClickLog}) =>{
  const context = useContext(contextApp)
  const setstate = useContext(setcontextApp)
  const setNewState = () =>{
    ClickLog("ContextDemoD")
    if(setstate){
      setstate(state=>{
        return {
          ...state,
          stateItems:{
            v1:"123",
            v2:'321'
          }
        }
      })
    }
  }
  return (
    <div>
      <p>{context.stateValue}</p>
      <p>{context.stateItems.v1}</p>
      <button onClick={setNewState}>修改</button>
    </div>
  )
}

export default withClickLog(ContextDemoD)