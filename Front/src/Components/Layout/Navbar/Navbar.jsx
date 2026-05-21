import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

export default function Navbar() {
 const navLinkStyles = ({ isActive }) =>
 isActive ? styles.active : styles.navLink;
 return (
 <nav className="d-flex justify-content-between align-items-center px-4 shadow-sm">
 <div className="d-flex align-items-center py-4">

 <h3>IT Helpdesk</h3>

 <div className="d-flex gap-3 ms-4 align-items-center">
 <NavLink className={navLinkStyles} to="/" >Dashboard</NavLink>
 <NavLink className={navLinkStyles} to="/tickets" >Tickets</NavLink>
 <NavLink className={styles.navLink}>Knowledge Base</NavLink>
 </div>

 </div>

 <div className="d-flex align-items-center">
 <div className="position-relative me-3">
 <i className="fa-regular fa-bell fs-4"></i>
 <div className={`bg-danger ${styles.newNot} rounded-circle position-absolute`}></div>
 </div>
 <div>
 <i className="fa-solid fa-arrow-right-from-bracket fs-4"></i>
 </div>

 </div>

 </nav>
 )
}
