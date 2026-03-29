import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Intake from './pages/Intake'
import Results from './pages/Results'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/intake" element={<Intake />} />
      <Route path="/results" element={<Results />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
