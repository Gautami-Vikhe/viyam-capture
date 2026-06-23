import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import CommonFooter from "../../components/common-footer/commonFooter";

const DoctorDetails = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-0">Provider Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to={all_routes.dashboard}>Home</Link></li>
                <li className="breadcrumb-item active">Provider Details</li>
              </ol>
            </div>
            <Link to={all_routes.allDoctorsList} className="fw-medium d-flex align-items-center">
              <i className="ti ti-arrow-left me-1" />Back to Providers
            </Link>
          </div>

          {/* Top Profile Card — full width horizontal */}
          <div className="card mb-3">
            <div className="card-body py-3">
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <div className="flex-shrink-0">
                  <span
                    className="avatar bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "80px", height: "80px", fontSize: "32px" }}
                  >
                    <i className="ti ti-stethoscope" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <div>
                      <h5 className="fw-bold mb-1">Dr. Andrew Clark</h5>
                      <p className="text-muted fs-13 mb-0">Interventional Cardiology · MD, FRCS</p>
                    </div>
                    <span className="badge badge-soft-primary fs-12 px-3 py-1">Cardiology</span>
                    <span className="badge badge-soft-success fs-12 px-3 py-1">Active</span>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-wrap text-center">
                  <div>
                    <h5 className="fw-bold text-primary mb-0">+300</h5>
                    <small className="text-muted fs-12">Appointments</small>
                  </div>
                  <div>
                    <h5 className="fw-bold text-success mb-0">4+</h5>
                    <small className="text-muted fs-12">Years Exp.</small>
                  </div>
                  <div>
                    <h5 className="fw-bold text-warning mb-0">MBBS</h5>
                    <small className="text-muted fs-12">Qualification</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info + Contact — horizontal card */}
          <div className="card mb-3">
            <div className="card-body py-3">
              <div className="row g-3">
                <div className="col-md-2 col-6">
                  <small className="text-muted fs-11 text-uppercase d-block">NPI Number</small>
                  <span className="fs-13 fw-semibold">1234567890</span>
                </div>
                <div className="col-md-2 col-6">
                  <small className="text-muted fs-11 text-uppercase d-block">Gender</small>
                  <span className="fs-13 fw-semibold">Male</span>
                </div>
                <div className="col-md-2 col-6">
                  <small className="text-muted fs-11 text-uppercase d-block">Phone</small>
                  <span className="fs-13 fw-semibold">+1 75964 25493</span>
                </div>
                <div className="col-md-3 col-6">
                  <small className="text-muted fs-11 text-uppercase d-block">Email</small>
                  <span className="fs-13 fw-semibold">andrew@example.com</span>
                </div>
                <div className="col-md-3 col-6">
                  <small className="text-muted fs-11 text-uppercase d-block">Facility</small>
                  <span className="fs-13 fw-semibold">City Medical Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* About + Education + Experience — 3 equal cards side by side */}
          <div className="row g-3 mb-3">

            {/* About */}
            <div className="col-xl-4">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-user text-primary fs-16" />
                    About
                  </h6>
                </div>
                <div className="card-body">
                  <p className="fs-13 text-muted mb-0">
                    Highly motivated and experienced provider with a passion for providing excellent care to patients. Experienced in diagnostics, primary care and emergency medicine. Committed to delivering compassionate, personalized care to each patient.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="col-xl-4">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-book-2 text-primary fs-16" />
                    Education
                  </h6>
                </div>
                <div className="card-body">
                  {[
                    { institution: "Oxford Medical Center", degree: "BAMS", year: "2015–2020" },
                    { institution: "Duke University Medical Center", degree: "MD/MS", year: "2021–2023" },
                    { institution: "City of Hope National Medical Center", degree: "Super Specialization", year: "2023–Present" },
                  ].map((edu, idx) => (
                    <div key={idx} className={`d-flex align-items-start gap-3 ${idx < 2 ? "mb-3 pb-3 border-bottom" : ""}`}>
                      <span className="avatar avatar-xs bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 mt-1">
                        <i className="ti ti-school fs-12" />
                      </span>
                      <div>
                        <p className="fs-13 fw-semibold mb-0">{edu.institution}</p>
                        <small className="text-muted">{edu.degree} · {edu.year}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="col-xl-4">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-briefcase text-primary fs-16" />
                    Experience
                  </h6>
                </div>
                <div className="card-body">
                  {[
                    { hospital: "Cambridge University Hospital", period: "Jan 2022 – Jan 2023", note: "Expertise in diagnostics, primary care and emergency medicine." },
                    { hospital: "Hill Medical Hospital, Newcastle", period: "Jan 2021 – Jan 2022", note: "Advanced diagnostics and trauma response." },
                  ].map((exp, idx) => (
                    <div key={idx} className={`d-flex align-items-start gap-3 ${idx < 1 ? "mb-3 pb-3 border-bottom" : ""}`}>
                      <span className="avatar avatar-xs bg-success-transparent text-success rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 mt-1">
                        <i className="ti ti-building-hospital fs-12" />
                      </span>
                      <div>
                        <p className="fs-13 fw-semibold mb-0">{exp.hospital}</p>
                        <small className="text-muted d-block">{exp.period}</small>
                        <small className="text-muted">{exp.note}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Membership + Awards — 2 cards side by side */}
          <div className="row g-3">

            {/* Membership */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-id-badge text-primary fs-16" />
                    Membership
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[
                      { title: "Affiliate Member", date: "Jan 2022", desc: "Allied health professionals supporting the Lifestyle Medicine movement." },
                      { title: "Group Head", date: "Jan 2022", desc: "Physician members including allopathic doctors." },
                    ].map((m, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="bg-light rounded p-3 h-100">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="avatar avatar-xs bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0">
                              <i className="ti ti-star fs-12" />
                            </span>
                            <div>
                              <p className="fs-13 fw-semibold mb-0">{m.title}</p>
                              <small className="text-muted">{m.date}</small>
                            </div>
                          </div>
                          <p className="fs-12 text-muted mb-0">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="col-xl-6">
              <div className="card mb-0 h-100">
                <div className="card-header py-2">
                  <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-award text-warning fs-16" />
                    Awards
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[
                      { title: "McLaughlin Medal", date: "Dec 2022", desc: "Research of sustained excellence in medical sciences." },
                      { title: "Chanchlani Global Health", date: "Mar 2023", desc: "World-class research on blindness and vision loss." },
                    ].map((a, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="bg-light rounded p-3 h-100">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="avatar avatar-xs bg-warning-transparent text-warning rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0">
                              <i className="ti ti-award fs-12" />
                            </span>
                            <div>
                              <p className="fs-13 fw-semibold mb-0">{a.title}</p>
                              <small className="text-muted">{a.date}</small>
                            </div>
                          </div>
                          <p className="fs-12 text-muted mb-0">{a.desc}</p>
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
  );
};

export default DoctorDetails;