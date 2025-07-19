import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './triage.css'
import {Triage} from './triage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Triage />
  </StrictMode>,
)
