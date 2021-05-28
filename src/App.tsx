import React, { createContext } from 'react'
import TestApp from './pages/test'
const deftlatV = {
  name: "张三"
}
export const defalutValue = createContext(deftlatV)
const App: React.FC = () => {
  return (
    <div>
      <defalutValue.Provider value={deftlatV}>
        <TestApp name='11' />
      </defalutValue.Provider>
    </div>
  )
}

export default App

