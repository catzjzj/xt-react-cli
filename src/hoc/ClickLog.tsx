import React, { useContext } from 'react';
import {ContextDemoDProps} from '../pages/contextDemo'
import {contextApp,setcontextApp} from '../hookState/appState'
export const withClickLog = (ChildComponent:React.ComponentType<ContextDemoDProps>)=>{
   return (props) =>{
      const context = useContext(contextApp)
      const  ClickLog = (name) =>{
        console.log(`点击行为来自${name}组件`);
        console.log(context.stateValue);
      }
      return <ChildComponent {...props} ClickLog={ClickLog}/>
   }
}
