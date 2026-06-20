import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";

// Mock data — replace with API call later
const facilityData = {
  id: "FC001",
  name: "City Medical Center",
  ehrSystem: "Epic",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  country: "USA",
  pincode: "10001",
  contact: "+1 212-555-0101",
  email: "info@citymedical.com",
  website: "www.citymedical.com",
  totalProviders: 12,
  totalPatients: 340,
};

const FacilityDetails = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Facility Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.facilityList}>Facility</Link>
                </li>
                <li className="breadcrumb-item active">Facility Details</li>
              </ol>
            </div>
            <Link
              to={all_routes.facilityList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Facility
            </Link>
          </div>

          <div className="row row-gap-4">

            {/* Left Column */}
            <div className="col-xl-4">
              <div className="card mb-0">
                <div className="card-body">

                  {/* Facility Identity */}
                  <div className="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom">
                    <span className="avatar avatar-xl bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center">
                      <i className="ti ti-building-hospital fs-28" />
                    </span>
                    <div>
                      <h5 className="mb-1 fw-semibold">{facilityData.name}</h5>
                      <span className="badge badge-soft-primary fs-12">
                        {facilityData.ehrSystem}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded p-3 text-center">
                        <h4 className="fw-bold text-primary mb-0">{facilityData.totalProviders}</h4>
                        <small className="text-muted fs-12">Providers</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded p-3 text-center">
                        <h4 className="fw-bold text-success mb-0">{facilityData.totalPatients}</h4>
                        <small className="text-muted fs-12">Patients</small>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-info-circle me-2 fs-16" />
                    Basic Information
                  </h6>
                  <div className="bg-light rounded p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Facility ID</span>
                      <span className="fs-13">{facilityData.id}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">EHR System</span>
                      <span className="badge badge-soft-primary fs-12">{facilityData.ehrSystem}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Contact</span>
                      <span className="fs-13">{facilityData.contact}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Email</span>
                      <span className="fs-13">{facilityData.email}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Website</span>
                      <span className="fs-13">{facilityData.website}</span>
                    </div>
                  </div>

                  {/* Address Info */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-map-pin me-2 fs-16" />
                    Address Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Address</span>
                      <span className="fs-13">{facilityData.address}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">City</span>
                      <span className="fs-13">{facilityData.city}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">State</span>
                      <span className="fs-13">{facilityData.state}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Country</span>
                      <span className="fs-13">{facilityData.country}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Pincode</span>
                      <span className="fs-13">{facilityData.pincode}</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-8">

              {/* Providers at this facility */}
              <div className="card mb-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-stethoscope text-primary fs-18" />
                    Providers
                  </h5>
                  <span className="badge bg-primary fs-12">
                    {facilityData.totalProviders} providers
                  </span>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-nowrap">
                    <table className="table mb-0 border">
                      <thead className="table-light">
                        <tr>
                          <th>Provider Name</th>
                          <th>Department</th>
                          <th>Qualification</th>
                          <th className="no-sort" />
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Dr. Andrew Clark", dept: "Cardiology", qual: "MBBS" },
                          { name: "Dr. Katherine Brooks", dept: "Dental Surgery", qual: "MDS" },
                          { name: "Dr. Benjamin Harris", dept: "Dermatology", qual: "MS" },
                          { name: "Dr. Laura Mitchell", dept: "ENT Surgery", qual: "MBBS" },
                        ].map((p, idx) => (
                          <tr key={idx}>
                            <td>
                              <h6 className="fs-14 mb-0 fw-medium">{p.name}</h6>
                            </td>
                            <td className="fs-13">{p.dept}</td>
                            <td>
                              <span className="badge badge-soft-secondary">{p.qual}</span>
                            </td>
                            <td className="text-end">
                              <Link
                                to={all_routes.doctorDetails}
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="ti ti-eye me-1" />
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Recent Patients */}
              <div className="card mb-0">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-users text-success fs-18" />
                    Recent Patients
                  </h5>
                  <span className="badge bg-success fs-12">
                    {facilityData.totalPatients} patients
                  </span>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-nowrap">
                    <table className="table mb-0 border">
                      <thead className="table-light">
                        <tr>
                          <th>Patient Name</th>
                          <th>Gender</th>
                          <th>Last Visit</th>
                          <th className="no-sort" />
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "James Carter", gender: "Male", lastVisit: "17 Jun 2025" },
                          { name: "Emily Davis", gender: "Female", lastVisit: "10 Jun 2025" },
                          { name: "Michael Johnson", gender: "Male", lastVisit: "22 May 2025" },
                          { name: "Olivia Miller", gender: "Female", lastVisit: "15 May 2025" },
                        ].map((p, idx) => (
                          <tr key={idx}>
                            <td>
                              <h6 className="fs-14 mb-0 fw-medium">{p.name}</h6>
                            </td>
                            <td className="fs-13">{p.gender}</td>
                            <td className="fs-13">{p.lastVisit}</td>
                            <td className="text-end">
                              <Link
                                to={all_routes.patientDetails}
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="ti ti-eye me-1" />
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default FacilityDetails;