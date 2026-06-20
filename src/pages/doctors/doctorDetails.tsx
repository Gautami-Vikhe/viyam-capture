import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import CommonFooter from "../../components/common-footer/commonFooter";

const DoctorDetails = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Provider Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Provider Details</li>
              </ol>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <Link
                to={all_routes.allDoctorsList}
                className="fw-medium d-flex align-items-center"
              >
                <i className="ti ti-arrow-left me-1" />
                Back to Providers
              </Link>
            </div>
          </div>
          {/* End Page Header */}

          <div className="row row-gap-4">
            {/* Left Column */}
            <div className="col-xl-4">
              <div className="card shadow mb-0">
                <div className="card-body">
                  {/* Provider Identity */}
                  <div className="d-flex align-items-center pb-3 mb-3 border-bottom gap-3">
                    <Link to="#" className="avatar avatar-xxl">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-01.jpg"
                        alt="provider"
                        className="rounded"
                      />
                    </Link>
                    <div>
                      <h5 className="mb-1 fw-semibold mt-2">
                        <Link to="#">Dr. Andrew Clark</Link>
                      </h5>
                      <p className="fs-13 mb-0">Cardiology, MD, FRCS</p>
                    </div>
                  </div>

                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-user-circle me-2 fs-18" />
                    Basic Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">NPI Number</span>
                      <span className="fs-13">1234567890</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Speciality</span>
                      <span className="fs-13">Interventional Cardiology</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Gender</span>
                      <span className="fs-13">Male</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Phone Number</span>
                      <span className="fs-13">+1 75964 25493</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Email</span>
                      <span className="fs-13">andrew@example.com</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Facility</span>
                      <span className="fs-13">City Medical Center</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Total Appointments</span>
                      <span className="fs-13">+300</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Left Column */}

            {/* Right Column */}
            <div className="col-xl-8">
              <div className="accordion accordion-bordered" id="BorderedaccordionExample">

                {/* About */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="about_view_header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#about_view"
                      aria-expanded="true"
                      aria-controls="about_view"
                    >
                      About
                    </button>
                  </h2>
                  <div
                    id="about_view"
                    className="accordion-collapse collapse show"
                    aria-labelledby="about_view_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Highly motivated and experienced provider with a passion
                        for providing excellent care to patients. Experienced in
                        a wide variety of medical settings, with particular
                        expertise in diagnostics, primary care and emergency
                        medicine. Skilled in using the latest technology to
                        streamline patient care. Committed to delivering
                        compassionate, personalized care to each and every patient.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="education_view_header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#education_view"
                      aria-expanded="false"
                      aria-controls="education_view"
                    >
                      Education
                    </button>
                  </h2>
                  <div
                    id="education_view"
                    className="accordion-collapse collapse"
                    aria-labelledby="education_view_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0 bg-light text-dark">
                            <i className="ti ti-book-2 fs-16" />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">Oxford Medical Center</h6>
                            <p className="fs-13 mb-0">BAMS</p>
                          </div>
                        </div>
                        <span className="badge bg-primary">2015 - 2020</span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0 bg-light text-dark">
                            <i className="ti ti-book-2 fs-16" />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">Duke University Medical Center</h6>
                            <p className="fs-13 mb-0">MD/MS</p>
                          </div>
                        </div>
                        <span className="badge bg-primary">2021 - 2023</span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0 bg-light text-dark">
                            <i className="ti ti-book-2 fs-16" />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">City of Hope National Medical Center</h6>
                            <p className="fs-13 mb-0">Super - Specialization</p>
                          </div>
                        </div>
                        <span className="badge bg-primary">2023 - Present</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="about_experience_header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#about_experience"
                      aria-expanded="false"
                      aria-controls="about_experience"
                    >
                      Experience
                    </button>
                  </h2>
                  <div
                    id="about_experience"
                    className="accordion-collapse collapse"
                    aria-labelledby="about_experience_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="p-3 rounded border mb-3">
                        <h6 className="fs-14 fw-semibold mb-1">Cambridge University Hospital, NHS Foundation Trust Cambridge</h6>
                        <p className="fs-13 mb-2">Jan 2022 - Jan 2023</p>
                        <p className="mb-0">
                          Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.
                        </p>
                      </div>
                      <div className="p-3 rounded border">
                        <h6 className="fs-14 fw-semibold mb-1">Hill Medical Hospital, Newcastle</h6>
                        <p className="fs-13 mb-2">Jan 2021 - Jan 2022</p>
                        <p className="mb-0">
                          Specializing in advanced diagnostics, general patient care and trauma response. Focused on providing empathetic, tailored treatment to every individual.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Membership */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="member_view_header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#member_view"
                      aria-expanded="false"
                      aria-controls="member_view"
                    >
                      Membership
                    </button>
                  </h2>
                  <div
                    id="member_view"
                    className="accordion-collapse collapse"
                    aria-labelledby="member_view_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="p-3 rounded border mb-3">
                        <h6 className="fs-14 fw-semibold mb-1">Affiliate Member</h6>
                        <p className="fs-13 mb-2">Jan 2022</p>
                        <p className="mb-0">
                          Affiliate members include related allied health professionals — evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical Psychologist) who will team up with allopathic physicians to support the Lifestyle Medicine movement in India through ISLM.
                        </p>
                      </div>
                      <div className="p-3 rounded border">
                        <h6 className="fs-14 fw-semibold mb-1">Group Head</h6>
                        <p className="fs-13 mb-2">Jan 2022</p>
                        <p className="mb-0">Physician members include the allopathic doctors only.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards */}
                <div className="accordion-item bg-white">
                  <h2 className="accordion-header" id="awards_view_header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#awards_view"
                      aria-expanded="false"
                      aria-controls="awards_view"
                    >
                      Awards
                    </button>
                  </h2>
                  <div
                    id="awards_view"
                    className="accordion-collapse collapse"
                    aria-labelledby="awards_view_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="p-3 rounded border">
                            <div className="d-flex align-items-center mb-2">
                              <Link to="#" className="avatar flex-shrink-0 bg-light text-dark">
                                <i className="ti ti-award fs-16" />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-semibold fs-14 text-truncate mb-1">McLaughlin Medal</h6>
                                <p className="fs-13 mb-0">Dec 2022</p>
                              </div>
                            </div>
                            <p className="mb-0 text-truncate line-clamb-2">
                              Important research of sustained excellence in any branch of medical sciences
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="p-3 rounded border">
                            <div className="d-flex align-items-center mb-2">
                              <Link to="#" className="avatar flex-shrink-0 bg-light text-dark">
                                <i className="ti ti-award fs-16" />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-semibold fs-14 text-truncate mb-1">Chanchlani Global Health</h6>
                                <p className="fs-13 mb-0">Mar 2023</p>
                              </div>
                            </div>
                            <p className="mb-0 text-truncate line-clamb-2">
                              Vital world-class research to explore the causes of blindness and vision loss...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>

        <CommonFooter />
      </div>
    </>
  );
};

export default DoctorDetails;