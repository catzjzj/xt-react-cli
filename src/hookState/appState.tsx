import * as React from 'react';
import { useState } from 'react';

interface AppStateValue {
  stateValue: string;
  stateItems: {
    v1:string
    v2:string
  }
}

const defalutValue : AppStateValue = {
  stateValue:'xt-react-cli',
  stateItems:{
    v1:"1",
    v2:"2"
  }
}

export const contextApp = React.createContext(defalutValue)
export const setcontextApp = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined >(undefined)



export const AppStateProvider:React.FC = (props) =>{
  const [state, setstate] = useState(defalutValue)
  return (
    <contextApp.Provider value={state}>
      <setcontextApp.Provider value={setstate}>
        {props.children}
      </setcontextApp.Provider>
    </contextApp.Provider>
  )
  
}