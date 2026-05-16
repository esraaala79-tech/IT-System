import styles from "./EmployeeCard.module.css"

export default function EmployeeCard({tickets}) {
  return (
   <>
   <div className= {`card shadow p-4 d-relative `}>
   <h4 className="fw-semibold m-auto mb-2 pb-4  border-bottom d-absul ">My Cards</h4>
   {
    tickets.map((t)=>(
      <div key={t.id} className="border-bottom py-4 mb-3 px-5 ">
    <p>#{t.id}</p>
    <p className="mb-3">{t.title}</p>
    <span className={`badge  me-2 mb-3  ${styles.bgpending}`}>
      {t.status}
    </span>
    <span className="badge bg-info ">
      {t.priorty}
    </span>
    <div className="small text-muted mt-1">
  created: {t.date}
    </div>
      </div>
    ))
   }
   </div>
   </>
  )
}
