import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import CommonSelect from "../../components/common-select/commonSelect";
import { State } from "../../core/json/selectOption";
import { useEffect } from "react";

const EHR_SYSTEMS = [
  { value: "epic", label: "Epic" },
  { value: "cerner", label: "Cerner" },
  { value: "meditech", label: "Meditech" },
  { value: "athenahealth", label: "Athenahealth" },
  { value: "eclinicalworks", label: "eClinicalWorks" },
  { value: "allscripts", label: "Allscripts" },
  { value: "nextgen", label: "NextGen" },
  { value: "other", label: "Other" },
];

const EditFacility = () => {

  useEffect(() => {
    document.body.classList.remove("modal-open");
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, []);

  const handleModalNavigation = () => {
    const modal = document.getElementById("success_modal");
    if (modal) {
      // @ts-ignore
      const bsModal = window.bootstrap.Modal.getInstance(modal) || new window.bootstrap.Modal(modal);
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
              <h4 className="mb-1">Facilities</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit Facility</li>
                </ol>
              </div>
            </div>
            <Link
              to={all_routes.facilityList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Facilities
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Facility Information — no card header */}
            <div className="card mb-3">
              <div className="card-body p-4">
                <div className="row g-3">
                  {/* Facility Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Facility Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Sunrise Medical Center"
                    />
                  </div>

                  {/* EHR System */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      EHR System<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={EHR_SYSTEMS}
                      className="select"
                      defaultValue={EHR_SYSTEMS[0]}
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Contact Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="312-555-0101"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information — no card header */}
            <div className="card mb-0">
              <div className="card-body p-4">
                <div className="row g-3">
                  {/* Address */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="123 Main St"
                    />
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <label className="form-label">
                      City<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Chicago"
                    />
                  </div>

                  {/* State */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      State<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={State}
                      className="select"
                      defaultValue={State[0]}
                    />
                  </div>

                  {/* Zip Code */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="60601"
                      placeholder="Enter zip code"
                    />
                  </div>

                  {/* Country */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="United States"
                    />
                  </div>
                </div>

                {/* Buttons inside card */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link
                    to={all_routes.facilityList}
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
              <div className="mb-4 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-success text-success rounded-circle">
                  <i className="ti ti-building-hospital fs-40" />
                </span>
              </div>
              <h6 className="mb-1">Updated Successfully</h6>
              <p className="mb-4">Facility details have been updated successfully</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.facilityList}
                  className="btn btn-outline-light position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  Back To List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditFacility;