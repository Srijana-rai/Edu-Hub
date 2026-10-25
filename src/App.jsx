import Sidebar from './Components/SideBar Components/Sidebar'
import { Routes, Route, Outlet } from 'react-router'
import Overview from './Components/SideBar Components/Overview'
import MyCourse from './Components/SideBar Components/My Course'
import Notifications from './Components/SideBar Components/Notifications'
import Progress from './Components/SideBar Components/Progress'
import Settings from './Components/SideBar Components/Settings'

function Layout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="courses" element={<MyCourse />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="progress" element={<Progress />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
  


export default App
