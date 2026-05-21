import React from 'react'
import TabelEmployees from '../../Components/UI/TabelEmployees/TabelEmployees'
import { Outlet } from 'react-router-dom'
export default function Employees() {
  return (
    <div>
      <TabelEmployees/>
      <Outlet/>
    </div>
  )
}
