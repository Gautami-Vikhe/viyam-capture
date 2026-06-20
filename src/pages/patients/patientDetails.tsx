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
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Patient Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Patient Details</li>
              </ol>
            </div>
            <Link to={all_routes.allPatientsList} className="fw-medium d-flex align-items-center">
              <i className="ti ti-arrow-left me-1" />
              Back to Patient
            </Link>
          </div>

          {/* Patient Details Header Tabs - Full Width */}
          <PatientDetailsHeader />

          {/* Row */}
          <div className="row">

            {/* LEFT COLUMN */}
            <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-body">
                  {/* Patient Profile */}
                  <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                    <Link to="#" className="avatar avatar-xxl me-3">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="patient"
                        className="rounded"
                      />
                    </Link>
                    <div>
                      <h5 className="mb-1 mt-2">
                        <Link to="#">Reyan Verol</Link>
                      </h5>
                      <p className="fs-13 mb-0">Last Visited : 24 Jan 2025</p>
                    </div>
                  </div>

                  {/* Basic Information */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-user-circle me-2 fs-18" />
                    Basic Information
                  </h6>
                  <div className="bg-light rounded p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Date of Birth</span>
                      <span className="fs-13">10 Jan 1991</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Age</span>
                      <span className="fs-13">34</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Gender</span>
                      <span className="fs-13">Male</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Martial Status</span>
                      <span className="fs-13">Married</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Mobile Number</span>
                      <span className="fs-13">+1 75964 25493</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Emergency Number</span>
                      <span className="fs-13">+1 75964 11111</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Guardian Name</span>
                      <span className="fs-13">John Verol</span>
                    </div>
                  </div>

                  {/* Address Information */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-map-pin me-2 fs-18" />
                    Address Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Address Line1</span>
                      <span className="fs-13">2557 Tanglewood Road</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">City</span>
                      <span className="fs-13">Jackson</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">State</span>
                      <span className="fs-13">Mississippi</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Country</span>
                      <span className="fs-13">USA</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Pincode</span>
                      <span className="fs-13">39213</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-xl-8">

              {/* Appointments */}
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h5 className="mb-0">Appointments</h5>
                  <Link to={all_routes.appointments} className="btn btn-sm btn-white flex-shrink-0">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row row-gap-3">
                    <div className="col-xl-6 d-flex">
                      <div className="p-3 border rounded flex-fill">
                        <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                          <span className="badge badge-soft-purple">Upcoming</span>
                          <Link to="#" className="btn btn-icon btn-secondary">
                            <i className="ti ti-video" />
                          </Link>
                        </div>
                        <div className="row row-gap-3">
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Doctor</h6>
                            <p className="fs-13 mb-0">Dr. Andrew Clark</p>
                          </div>
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Date & Time</h6>
                            <p className="fs-13 mb-0">21 Dec 2024, 07:00 AM</p>
                          </div>
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Booked On</h6>
                            <p className="fs-13 mb-0">20 Dec 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 d-flex">
                      <div className="p-3 border rounded flex-fill">
                        <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                          <span className="badge badge-soft-success">Completed</span>
                          <Link to="#" className="btn btn-icon btn-primary">
                            <i className="ti ti-phone" />
                          </Link>
                        </div>
                        <div className="row row-gap-3">
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Doctor</h6>
                            <p className="fs-13 mb-0">Dr. Laura Mitchell</p>
                          </div>
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Date & Time</h6>
                            <p className="fs-13 mb-0">15 Jan 2025, 10:35 AM</p>
                          </div>
                          <div className="col-sm-6">
                            <h6 className="fs-14 fw-semibold mb-1">Booked On</h6>
                            <p className="fs-13 mb-0">13 Jan 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit History */}
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h5 className="fw-bold mb-0">Visit History</h5>
                  <Link to={all_routes.visits} className="btn btn-sm btn-outline-light flex-shrink-0">
                    View All
                  </Link>
                </div>
                <div className="card-body pb-0">
                  <div className="row row-gap-3">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <Link to={all_routes.doctorDetails} className="avatar flex-shrink-0">
                              <ImageWithBasePath src="assets/img/doctors/doctor-12.jpg" className="rounded" alt="doctor" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-semibold fs-14 text-truncate mb-1">
                                <Link to={all_routes.doctorDetails}>Dr. Samuel Turner</Link>
                              </h6>
                              <p className="fs-13 mb-0">Cardiology, MD, FRCS</p>
                            </div>
                          </div>
                          <div className="row mb-3 row-gap-2">
                            <div className="col-sm-6">
                              <h6 className="fw-semibold mb-1 fs-14">Visited On</h6>
                              <p className="fs-13 mb-0">21 Dec 2024, 07:00 AM</p>
                            </div>
                            <div className="col-sm-6">
                              <h6 className="fw-semibold mb-1 fs-14">Follow Up</h6>
                              <p className="fs-13 mb-0">After 15 Days</p>
                            </div>
                          </div>
                          <div className="p-3 bg-light rounded">
                            <h6 className="fw-semibold mb-1 fs-14">Notes</h6>
                            <p className="fs-13 mb-0">Detailed information about the symptoms that brought the patient to the visit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <Link to={all_routes.doctorDetails} className="avatar flex-shrink-0">
                              <ImageWithBasePath src="assets/img/doctors/doctor-09.jpg" className="rounded" alt="doctor" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-semibold fs-14 text-truncate mb-1">
                                <Link to={all_routes.doctorDetails}>Dr. Natalie Foster</Link>
                              </h6>
                              <p className="fs-13 mb-0">Neurology, MD, DNB</p>
                            </div>
                          </div>
                          <div className="row mb-3 row-gap-2">
                            <div className="col-sm-6">
                              <h6 className="fw-semibold mb-1 fs-14">Visited On</h6>
                              <p className="fs-13 mb-0">08 Jan 2024, 09:55 AM</p>
                            </div>
                            <div className="col-sm-6">
                              <h6 className="fw-semibold mb-1 fs-14">Follow Up</h6>
                              <p className="fs-13 mb-0">After 12 Days</p>
                            </div>
                          </div>
                          <div className="p-3 bg-light rounded">
                            <h6 className="fw-semibold mb-1 fs-14">Notes</h6>
                            <p className="fs-13 mb-0">Information provided to the patient regarding their condition and symptoms</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="card mb-0">
                <div className="card-header">
                  <h5 className="fw-bold mb-0">Insurance Information</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Insurance Provider</label>
                        <p className="mb-0">Blue Cross Blue Shield</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Policy Number</label>
                        <p className="mb-0">BCB-2024-78542</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Group Number</label>
                        <p className="mb-0">GRP-45821</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Member ID</label>
                        <p className="mb-0">MEM-112233</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Valid From</label>
                        <p className="mb-0">01 Jan 2024</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Valid Until</label>
                        <p className="mb-0">31 Dec 2025</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Coverage Type</label>
                        <p className="mb-0">Full Coverage</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark fs-13 d-block mb-1">Status</label>
                        <p className="mb-0">
                          <span className="badge badge-soft-success">Active</span>
                        </p>
                      </div>
                    </div>
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

export default PatientDetails