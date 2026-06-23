import { Link } from "react-router-dom"
import CommonFooter from "../../components/common-footer/commonFooter"
import { all_routes } from "../../routes/all_routes"
import ImageWithBasePath from "../../components/image-with-base-path"
import PatientDetailsHeader from "./PatientDetailsHeader";

const PatientDetails = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-0">Patient Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to={all_routes.dashboard}>Home</Link></li>
                <li className="breadcrumb-item active">Patient Details</li>
              </ol>
            </div>
            <Link to={all_routes.allPatientsList} className="fw-medium d-flex align-items-center">
              <i className="ti ti-arrow-left me-1" />Back to Patients
            </Link>
          </div>

          {/* Tabs */}
          <PatientDetailsHeader />

          {/* Top Profile Card — horizontal */}
          <div className="card mb-3">
            <div className="card-body py-3">
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <div className="flex-shrink-0">
                 <img
                    src="/assets/img/profiles/avatar-03.jpg"
                    alt="patient"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <div>
                      <h5 className="fw-bold mb-1">Reyan Verol</h5>
                      <p className="text-muted fs-13 mb-0">Last Visited: 24 Jan 2025</p>
                    </div>
                    <span className="badge badge-soft-primary fs-12 px-3 py-1">Male</span>
                    <span className="badge badge-soft-success fs-12 px-3 py-1">Active</span>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-wrap text-center">
                  <div>
                    <h5 className="fw-bold text-primary mb-0">34</h5>
                    <small className="text-muted fs-12">Age</small>
                  </div>
                  <div>
                    <h5 className="fw-bold text-success mb-0">5</h5>
                    <small className="text-muted fs-12">Visits</small>
                  </div>
                  <div>
                    <h5 className="fw-bold text-warning mb-0">2</h5>
                    <small className="text-muted fs-12">Upcoming</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info + Address — 2 cards side by side */}
          <div className="row g-3 mb-3">

            {/* Basic Info */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-user-circle text-primary fs-16" />
                    Basic Information
                  </h6>
                </div>
                <div className="card-body p-0">
                  <div className="px-3">
                    {[
                      { label: "Date of Birth", value: "10 Jan 1991" },
                      { label: "Age", value: "34" },
                      { label: "Gender", value: "Male" },
                      { label: "Marital Status", value: "Married" },
                      { label: "Mobile Number", value: "+1 75964 25493" },
                      { label: "Emergency Number", value: "+1 75964 11111" },
                      { label: "Guardian Name", value: "John Verol" },
                    ].map((item, idx, arr) => (
                      <div key={idx} className={`d-flex justify-content-between align-items-center py-2 ${idx < arr.length - 1 ? "border-bottom" : ""}`}>
                        <span className="fw-bold text-dark fs-13">{item.label}</span>
                        <span className="fs-13 text-muted">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Address Info */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-map-pin text-primary fs-16" />
                    Address & Insurance
                  </h6>
                </div>
                <div className="card-body p-0">
                  <div className="px-3">
                    {[
                      { label: "Address", value: "2557 Tanglewood Road" },
                      { label: "City", value: "Jackson" },
                      { label: "State", value: "Mississippi" },
                      { label: "Country", value: "USA" },
                      { label: "Pincode", value: "39213" },
                      { label: "Insurance", value: "Blue Cross Blue Shield" },
                      { label: "Policy No.", value: "BCB-2024-78542" },
                    ].map((item, idx, arr) => (
                      <div key={idx} className={`d-flex justify-content-between align-items-center py-2 ${idx < arr.length - 1 ? "border-bottom" : ""}`}>
                        <span className="fw-bold text-dark fs-13">{item.label}</span>
                        <span className="fs-13 text-muted">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Appointments + Visit History — side by side */}
          <div className="row g-3">

            {/* Appointments */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2 d-flex align-items-center justify-content-between">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-calendar text-primary fs-16" />
                    Appointments
                  </h6>
                  <Link to={all_routes.appointments} className="btn btn-sm btn-outline-primary">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[
                      { status: "Upcoming", statusClass: "badge-soft-warning", doctor: "Dr. Andrew Clark", datetime: "21 Dec 2024, 07:00 AM", bookedOn: "20 Dec 2024", icon: "ti-video", iconClass: "btn-secondary" },
                      { status: "Completed", statusClass: "badge-soft-success", doctor: "Dr. Laura Mitchell", datetime: "15 Jan 2025, 10:35 AM", bookedOn: "13 Jan 2025", icon: "ti-phone", iconClass: "btn-primary" },
                    ].map((apt, idx) => (
                      <div key={idx} className="col-12">
                        <div className="bg-light rounded p-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className={`badge ${apt.statusClass} fs-12`}>{apt.status}</span>
                            <Link to="#" className={`btn btn-icon btn-sm ${apt.iconClass}`}>
                              <i className={`ti ${apt.icon} fs-14`} />
                            </Link>
                          </div>
                          <div className="row g-2">
                            <div className="col-6">
                              <small className="text-muted d-block">Doctor</small>
                              <span className="fs-13 fw-semibold">{apt.doctor}</span>
                            </div>
                            <div className="col-6">
                              <small className="text-muted d-block">Date & Time</small>
                              <span className="fs-13 fw-semibold">{apt.datetime}</span>
                            </div>
                            <div className="col-6">
                              <small className="text-muted d-block">Booked On</small>
                              <span className="fs-13 fw-semibold">{apt.bookedOn}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visit History */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2 d-flex align-items-center justify-content-between">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-history text-primary fs-16" />
                    Visit History
                  </h6>
                  <Link to={all_routes.visits} className="btn btn-sm btn-outline-primary">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[
                      { img: "assets/img/doctors/doctor-12.jpg", name: "Dr. Samuel Turner", specialty: "Cardiology, MD, FRCS", visitedOn: "21 Dec 2024, 07:00 AM", followUp: "After 15 Days", notes: "Detailed information about the symptoms that brought the patient to the visit." },
                      { img: "assets/img/doctors/doctor-09.jpg", name: "Dr. Natalie Foster", specialty: "Neurology, MD, DNB", visitedOn: "08 Jan 2024, 09:55 AM", followUp: "After 12 Days", notes: "Information provided to the patient regarding their condition and symptoms." },
                    ].map((visit, idx) => (
                      <div key={idx} className="col-12">
                        <div className="bg-light rounded p-3">
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <Link to={all_routes.doctorDetails} className="avatar avatar-sm flex-shrink-0">
                              <ImageWithBasePath src={visit.img} className="rounded-circle" alt="doctor" />
                            </Link>
                            <div>
                              <p className="fs-13 fw-semibold mb-0">
                                <Link to={all_routes.doctorDetails}>{visit.name}</Link>
                              </p>
                              <small className="text-muted">{visit.specialty}</small>
                            </div>
                          </div>
                          <div className="row g-2 mb-2">
                            <div className="col-6">
                              <small className="text-muted d-block">Visited On</small>
                              <span className="fs-13 fw-semibold">{visit.visitedOn}</span>
                            </div>
                            <div className="col-6">
                              <small className="text-muted d-block">Follow Up</small>
                              <span className="fs-13 fw-semibold">{visit.followUp}</span>
                            </div>
                          </div>
                          <p className="fs-12 text-muted mb-0 bg-white rounded p-2">{visit.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <CommonFooter />
      </div>
    </>
  )
}

export default PatientDetails;