import React from 'react';
import { AppStateProvider } from '../hookState/appState'
import ContextDemoD from './contextDemo';

const HookStates:React.FC = ()=>{

  return (
    <div>
      <AppStateProvider>
        <ContextDemoD/>
      </AppStateProvider>
    </div>
  )
}

export default HookStates