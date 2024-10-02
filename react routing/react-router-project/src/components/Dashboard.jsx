import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      {/* used to render nested routes */}
      <Outlet/> 

    </div>
  )
}

export default Dashboard