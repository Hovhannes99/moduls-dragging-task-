import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { ContextWrapper } from '@components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ContextWrapper>
        <App />
    </ContextWrapper>
)

reportWebVitals()
