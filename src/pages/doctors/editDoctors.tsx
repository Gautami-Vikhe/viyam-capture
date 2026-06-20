import { useEffect } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import CommonSelect from "../../components/common-select/commonSelect";
import { Gender, Specialist } from "../../core/json/selectOption";

const FacilityOptions = [
  { value: "facility1", label: "City Medical Center" },
  { value: "facility2", label: "Downtown Health Clinic" },
  { value: "facility3", label: "Sunrise Hospital" },
  { value: "facility4", label: "Green Valley Medical" },
];

const EditDoctors = () => {
  useEffect(() => {
    document.body.classList.remove("modal-open");
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, []);

  const handleModalNavigation = () => {
    const modal = document.getElementById("success_modal");
    if (modal) {
      // @ts-ignore
      const bsModal =
        window.bootstrap.Modal.getInstance(modal) ||
        new window.bootstrap.Modal(modal);
      bsModal.hide();
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) backdrop.remove();
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Edit Provider</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Edit Provider</li>
              </ol>
            </div>
            <Link
              to={all_routes.allDoctorsList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Providers
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card mb-0">
              <div className="card-body p-4">

                {/* Fields */}
                <div className="row g-3">

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Andrew"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter middle name"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Clark"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Provider NPI Number
                      <span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 10-digit NPI"
                      maxLength={10}
                      defaultValue="1234567890"
                    />
                  </div>

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

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Phone Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="+1 75964 25493"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="andrew@example.com"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Speciality<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={Specialist}
                      className="select"
                      defaultValue={Specialist[0]}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Facility Name<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={FacilityOptions}
                      className="select"
                      defaultValue={FacilityOptions[0]}
                    />
                  </div>
                </div>

                {/* Profile Image — moved to bottom, styled as a section */}
                <div className="border-top mt-4 pt-4">
                  <label className="form-label fw-semibold mb-2">
                    Profile Image<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap gap-3 p-3 bg-light rounded">
                    <div className="flex-shrink-0">
                      <div className="position-relative d-flex align-items-center border rounded bg-white">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-01.jpg"
                          className="avatar avatar-xl"
                          alt="provider"
                        />
                      </div>
                    </div>
                    <div className="d-inline-flex flex-column align-items-start">
                      <div className="d-inline-flex align-items-start gap-2">
                        <div className="drag-upload-btn btn btn-dark position-relative mb-2">
                          <i className="ti ti-arrows-exchange-2 me-1" />
                          Change Image
                          <input
                            type="file"
                            className="form-control image-sign"
                            multiple
                          />
                        </div>
                        <Link
                          to="#"
                          className="btn btn-danger d-flex align-items-center gap-1"
                        >
                          <i className="ti ti-trash" /> Remove
                        </Link>
                      </div>
                      <span className="fs-13 text-body">
                        Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons inside card */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link to={all_routes.allDoctorsList} className="btn btn-white">
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#success_modal"
                  >
                    Save Changes
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
              <div className="mb-2 position-relative z-1">
                <span className="avatar avatar-md bg-success rounded-circle">
                  <i className="ti ti-circle-check fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Updated Successfully</h5>
              <p className="mb-4">Provider details have been updated successfully.</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.allDoctorsList}
                  className="btn btn-outline-light position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  Back to Providers
                </Link>
                <Link
                  to={all_routes.doctorDetails}
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

export default EditDoctors;