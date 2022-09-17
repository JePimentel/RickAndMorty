import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RamProvider } from './context'
import './index.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RamProvider>
      <App />
    </RamProvider>
  </React.StrictMode>
)