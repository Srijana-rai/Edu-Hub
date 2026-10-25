import { NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Overview', end: true },
  { to: '/courses', label: 'My Courses' },
  { to: '/notifications', label: 'Notifications' },
  { to: '/progress', label: 'Progress' },
  { to: '/settings', label: 'Settings' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        {/* Put school.jpeg inside the public/ folder */}
        <img src="./Images/school.jpeg" alt="Logo" />
        <h1>Education Hub</h1>
      </div>

      <nav>
        <ul>
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
