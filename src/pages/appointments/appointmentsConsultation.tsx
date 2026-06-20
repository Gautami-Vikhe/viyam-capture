import { useEffect } from "react";
import { all_routes } from "../../routes/all_routes";
import CommonFooter from "../../components/common-footer/commonFooter";
import ImageWithBasePath from "../../components/image-with-base-path";
import { Link } from "react-router-dom";
import {
  Consultation,
  Frequency,
  Timing,
  YesORNo,
} from "../../core/json/selectOption";
import CommonSelect from "../../components/common-select/commonSelect";

const AppointmentConsultation = () => {
  useEffect(() => {
    // Remove any lingering modal-backdrop and modal-open classes
    document.body.classList.remove("modal-open");
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, []);
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Consultation</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={all_routes.appointments}>Appointments</Link>
                  </li>
                  <li className="breadcrumb-item active">Consultation</li>
                </ol>
              </div>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <Link
                to={all_routes.appointments}
                className="fw-medium d-flex align-items-center"
              >
                <i className="ti ti-arrow-left me-1" />
                Back to Appointments
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* card start */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h5 className="mb-0">Basic Information</h5>
              <Link
                to="#"
                className="fw-medium d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#medical_history"
              >
                View Medical History
                <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
            <div className="card-body">
              <div className="row row-gap-3 align-items-center">
                <div className="col-xxl-6 col-xl-5">
                  <div className="d-sm-flex align-items-center">
                    <Link
                      to="javascript:void(0);"
                      className="avatar avatar-xxxl mb-3 mb-sm-0 me-sm-3 flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/avatars/avatar-05.jpg"
                        alt="patient"
                        className="rounded"
                      />
                    </Link>
                    <div>
                      <span className="badge badge-soft-primary mb-1">
                        Out Patient
                      </span>
                      <h6 className="mb-1">
                        <Link to={all_routes.patientDetails}>Reyan Verol</Link>
                      </h6>
                      <p className="mb-1">Consultation ID : #C243546</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7">
                  <div className="p-3 bg-light rounded">
                    <div className="row row-gap-2">
                      <div className="col-sm-4">
                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">
                          Age / Gender
                        </h6>
                        <p className="fs-13 mb-0 text-truncate">
                          28 Years / Male
                        </p>
                      </div>
                      <div className="col-sm-4">
                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">
                          Department
                        </h6>
                        <p className="fs-13 mb-0 text-truncate">Cardiology</p>
                      </div>
                      <div className="col-sm-4">
                        <h6 className="fs-14 fw-semibold mb-1">Date</h6>
                        <p className="fs-13 mb-0">25 Jan 2025, 07:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
          <form>
            {/* card start */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Vitals</h5>
              </div>
              <div className="card-body">
                <div className="vitals-info">
                  <div className="row gx-3">
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Temperature{" "}
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">F</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Pulse<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">mmHg</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Respiratory Rate
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">rpm</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          SPO2<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Height<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Weight<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">Kg</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          BMI<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">kg/cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Waist<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          BSA<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="javascript:void(0);"
                  className="link-primary fw-medium"
                >
                  <i className="ti ti-plus me-1" />
                  Add New
                </Link>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Complaint</h5>
              </div>
              <div className="card-body">
                <div className="mb-0">
                  <input type="text" className="form-control" />
                  <p className="mb-0 mt-1 fs-13">
                    Enter value separated by comma{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Medications</h5>
              </div>
              <div className="card-body">
                <div className="row gx-3">
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Medicine Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Dosage<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-text">mg</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Duration<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-text">M</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Frequency<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Frequency}
                        className="select"
                        defaultValue={Frequency[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Timing<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Timing}
                        className="select"
                        defaultValue={Timing[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Instructions<span className="text-danger ms-1">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row gx-3">
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Medicine Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Dosage<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-text">mg</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Duration<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-text">M</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Frequency<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Frequency}
                        className="select"
                        defaultValue={Frequency[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Timing<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Timing}
                        className="select"
                        defaultValue={Timing[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <label className="form-label">
                      Instructions<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="d-flex align-items-center">
                      <div className="mb-3 w-100">
                        <input className="form-control" />
                      </div>
                      <Link
                        to="javascript:void(0);"
                        className="ms-2 mb-3 d-flex align-items-center rounded-circle btn-icon btn-xs fs-12 btn-soft-danger p-0 flex-shrink-0"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to="javascript:void(0);"
                  className="link-primary fw-medium"
                >
                  <i className="ti ti-plus me-1 " />
                  Add New
                </Link>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Investigations &amp; Procedure</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
                <Link
                  to="javascript:void(0);"
                  className="link-primary fw-medium"
                >
                  <i className="ti ti-plus me-1" />
                  Add New
                </Link>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Advice</h5>
              </div>
              <div className="card-body pb-1">
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="card mb-0">
              <div className="card-header">
                <h5 className="mb-0">Follow Up</h5>
              </div>
              <div className="card-body pb-1">
                <div className="row gx-3 align-items-center">
                  <div className="col-md-6">
                    <div className="mb-md-3">
                      <label className="form-label mb-md-0">
                        Next Consultation
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <CommonSelect
                        options={Consultation}
                        className="select"
                        defaultValue={Consultation[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-md-3">
                      <label className="form-label mb-md-0">
                        Whether to Come on Empty Stomach?
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="mb-3 w-100">
                      <CommonSelect
                        options={YesORNo}
                        className="select"
                        defaultValue={YesORNo[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            <div className="d-flex align-items-center gap-2 mt-4 justify-content-end">
              <button type="button" className="btn btn-white">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                End Consultation
              </button>
            </div>
          </form>
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default AppointmentConsultation;
