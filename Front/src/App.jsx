import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './Components/Layout/AdminLayout'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Tickets from './Pages/Admin/Tickets'
import Reports from './Pages/Admin/Reports'
import Employees from './Pages/Admin/Employees'
import Settings from './Pages/Admin/Settings'
function App() {


  return (
    <>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path='/' element={<AdminDashboard />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
