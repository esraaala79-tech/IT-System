import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"
export default function Sidebar() {
 return (
 <aside className={`d-flex pt-4 flex-column shadow-sm vh-100 ${styles.sideNav} gap-2`}>
 <NavLink className={({ isActive }) => `text-decoration-none d-flex gap-2 align-items-center text-body-secondary ${styles.NavLink} ${isActive ? styles.active : styles.inActive}`} to="/tickets"><i className="bi bi-ticket-perforated-fill "></i>Tickets</NavLink>
 <NavLink className={({ isActive }) => `text-decoration-none d-flex gap-2 align-items-center text-body-secondary ${styles.NavLink} ${isActive ? styles.active : styles.inActive}`} to="/employees"><i className="fa-solid fa-user-group "></i> Employees</NavLink>
 <NavLink className={({ isActive }) => `text-decoration-none d-flex gap-2 align-items-center text-body-secondary ${styles.NavLink} ${isActive ? styles.active : styles.inActive}`} to="/reports"><i className="fa-solid fa-chart-simple "></i> Reports</NavLink>
 <NavLink className={({ isActive }) => `text-decoration-none d-flex gap-2 align-items-center text-body-secondary ${styles.NavLink} ${isActive ? styles.active : styles.inActive}`} to="/settings"><i className="fa-solid fa-gear "></i>Settings</NavLink>
 </aside>
 )
}