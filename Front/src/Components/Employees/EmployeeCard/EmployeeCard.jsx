import styles from "./EmployeeCard.module.css";

export default function EmployeeCard({ tickets }) {
  return (
    <>
      <div className="card shadow p-4 position-relative">
        <h4 className="fw-semibold text-center mb-2 pb-4 border-bottom">
          My Cards
        </h4>

        {tickets.map((t) => (
          <div key={t.id} className="border-bottom py-4 mb-3 px-3">
            <p>#{t.id}</p>

            <p className="mb-3 fw-semibold">{t.title}</p>

            <span className={`badge me-2 mb-3 ${styles.bgpending}`}>
              {t.status}
            </span>

            <span className="badge bg-info">
              {t.priority}
            </span>

            <div className="small text-muted mt-1">
              Created: {t.date}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}