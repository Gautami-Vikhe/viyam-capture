import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import CommonSelect from "../../components/common-select/commonSelect";
import {
  City,
  Country,
  Gender,
  MartialStatus,
  State,
} from "../../core/json/selectOption";
import { useState } from "react";

const AddPatient = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = (dobValue: string) => {
    if (!dobValue) return "";
    const today = new Date();
    const birthDate = new Date(dobValue);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge.toString();
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDob(value);
    setAge(calculateAge(value));
  };

  const handleModalNavigation = () => {
    const modal = document.getElementById("success_modal");
    if (modal) {
      // @ts-ignore
      const bsModal = window.bootstrap?.Modal?.getInstance(modal);
      if (bsModal) bsModal.hide();
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Patients</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Patient</li>
                </ol>
              </div>
            </div>
            <Link
              to={all_routes.allPatientsList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Patient
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Basic Information — no card header */}
            <div className="card mb-3">
              <div className="card-body p-4">
                <div className="row g-3">
                  {/* First Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter first name" />
                  </div>

                  {/* Middle Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Middle Name
                    </label>
                    <input type="text" className="form-control" placeholder="Enter middle name" />
                  </div>

                  {/* Last Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter last name" />
                  </div>

                  {/* Gender */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Gender<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={Gender}
                      className="select"
                      defaultValue={Gender[0]}
                    />
                  </div>

                  {/* DOB */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Date of Birth<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={dob}
                      onChange={handleDobChange}
                    />
                  </div>

                  {/* Age - Auto calculated */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Age<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={age}
                      placeholder="Auto calculated"
                      readOnly
                    />
                  </div>

                  {/* Martial Status */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Martial Status<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={MartialStatus}
                      className="select"
                      defaultValue={MartialStatus[0]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information — no card header */}
            <div className="card mb-3">
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Mobile Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input className="form-control" name="phone" type="tel" placeholder="Enter mobile number" />
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Emergency Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input className="form-control" name="emergencyPhone" type="text" placeholder="Enter emergency number" />
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Guardian / Person Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter guardian name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Address Line 1<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter address line 1" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Address Line 2</label>
                    <input type="text" className="form-control" placeholder="Enter address line 2" />
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <label className="form-label">
                      Country<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={Country}
                      className="select"
                      defaultValue={Country[0]}
                    />
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <label className="form-label">City</label>
                    <CommonSelect
                      options={City}
                      className="select"
                      defaultValue={City[0]}
                    />
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <label className="form-label">State</label>
                    <CommonSelect
                      options={State}
                      className="select"
                      defaultValue={State[0]}
                    />
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" placeholder="Enter pincode" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image — own card at the bottom */}
            <div className="card mb-0">
              <div className="card-body p-4">
                <label className="form-label fw-semibold mb-2">
                  Profile Image
                  <span className="text-danger ms-1">*</span>
                </label>
                <div className="d-flex align-items-center flex-wrap gap-3 p-3 bg-light rounded">
                  <div className="flex-shrink-0">
                    <div className="position-relative d-flex align-items-center border rounded bg-white">
                      <ImageWithBasePath
                        src="assets/img/users/user-12.jpg"
                        className="avatar avatar-xl"
                        alt="patient"
                      />
                    </div>
                  </div>
                  <div className="d-inline-flex flex-column align-items-start">
                    <div className="d-inline-flex align-items-start gap-2 flex-wrap">
                      <div className="drag-upload-btn btn btn-dark position-relative mb-2">
                        <i className="ti ti-arrows-exchange-2 me-1" />
                        Change Image
                        <input type="file" className="form-control image-sign" multiple />
                      </div>
                      <div>
                        <Link to="#" className="btn btn-danger d-flex align-items-center gap-1">
                          <i className="ti ti-trash" /> Remove
                        </Link>
                      </div>
                    </div>
                    <span className="fs-13 text-body">
                      Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB
                    </span>
                  </div>
                </div>

                {/* Buttons inside card */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link
                    to={all_routes.allPatientsList}
                    className="btn btn-outline-light"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#success_modal"
                  >
                    Save Patient
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <CommonFooter />
      </div>

      {/* Success Modal */}
      <div className="modal fade" id="success_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <div className="mb-4 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-success text-success rounded-circle">
                  <i className="ti ti-calendar-check fs-40" />
                </span>
              </div>
              <h6 className="mb-1">Added Successfully</h6>
              <p className="mb-4">Patient has been added to the Patient List</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.allPatientsList}
                  className="btn btn-outline-light position-relative z-1 me-2 w-100"
                  onClick={handleModalNavigation}
                >
                  Back To List
                </Link>
                <Link
                  to={all_routes.patientDetails}
                  className="btn btn-primary position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPatient;