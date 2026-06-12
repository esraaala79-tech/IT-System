

export default function Settings() {
    return (
        <>
            <section className="container p-4">
                <div className="d-flex justify-content-between mb-5">
                    <h2>Profile Settings</h2>

                    <button className="btn btn-primary">Change Password</button>

                </div>
                <div className="bg-light rounded-3 w-75">
                    <div className="d-flex justify-content-between align-items-center px-5 py-4 border-bottom">
                        <h4>Personal Information</h4>

                        <i class="fa-regular fa-user fs-5"></i>

                    </div>

                    <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center gap-3 py-5">
                        <div className="d-flex flex-column w-40">
                            <label className="mb-2 text-secondary normal-font fw-medium">FULL NAME</label>
                            <input type="text" className="form-control " value="Admin" disabled />
                        </div>
                        <div className="d-flex flex-column w-40">
                            <label className="mb-2 text-secondary normal-font fw-medium">EMAIL ADDRESS</label>
                            <input type="email" className="form-control" value="examble26@gmail.com" disabled />
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
