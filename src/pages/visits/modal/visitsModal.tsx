import { Link } from "react-router-dom";
import {
  Department,
  Doctor,
  ModePayment,
  Patient,
  PatientType,
} from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import CommonTimePicker from "../../../components/common-time-pickers/CommonTimePicker";
import ImageWithBasePath from "../../../components/image-with-base-path";


const VisitsModal = () => {


  return (
    <>
      {/* Start Add Modal */}
      <div id="add_visit" className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold text-truncate">
                Add New Visit
              </h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-circle-x-filled" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Patient</label>
                      <CommonSelect
                        options={Patient}
                        className="select"
                        defaultValue={Patient[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Patient Type</label>
                      <CommonSelect
                        options={PatientType}
                        className="select"
                        defaultValue={PatientType[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Department</label>
                      <CommonSelect
                        options={Department}
                        className="select"
                        defaultValue={Department[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Doctor</label>
                      <CommonSelect
                        options={Doctor}
                        className="select"
                        defaultValue={Doctor[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Date of Visit</label>
                      <div className=" w-auto input-group-flat">
                        <CommonDatePicker placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Time of Visit</label>
                      <div className=" position-relative">
                        <CommonTimePicker />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Reason</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Mode of Payment</label>
                      <CommonSelect
                        options={ModePayment}
                        className="select"
                        defaultValue={ModePayment[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Visit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Edit Modal */}
      <div id="edit_visit" className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold text-truncate">
                Edit Visit
              </h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-circle-x-filled" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Patient</label>
                      <CommonSelect
                        options={Patient}
                        className="select"
                        defaultValue={Patient[1]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Patient Type</label>
                      <CommonSelect
                        options={PatientType}
                        className="select"
                        defaultValue={PatientType[1]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Department</label>
                      <CommonSelect
                        options={Department}
                        className="select"
                        defaultValue={Department[1]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Select Doctor</label>
                      <CommonSelect
                        options={Doctor}
                        className="select"
                        defaultValue={Doctor[1]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Date of Visit</label>
                      <div className=" w-auto input-group-flat">
                        <CommonDatePicker placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Time of Visit</label>
                      <div className=" position-relative">
                        <CommonTimePicker />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Reason</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Mode of Payment</label>
                      <CommonSelect
                        options={ModePayment}
                        className="select"
                        defaultValue={ModePayment[1]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Edit Modal */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="mb-2">
                <span className="avatar avatar-md rounded-circle bg-danger">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h6 className="fs-16 mb-1">Confirm Deletion</h6>
              <p className="mb-3">Are you sure you want to delete this?</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to="#"
                  className="btn btn-outline-light w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-danger w-100">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
        {/* Start view Modal */}
        <div id="view_modal" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header justify-content-between">
                <h5 className="modal-title text-truncate">Visit History</h5>
                <button
                  type="button"
                  className="btn-close btn-close-modal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled" />
                </button>
              </div>
              <div className="modal-body">
                <div className="bg-light rounded p-2 mb-4">
                  <div className="row align-items-center row-gap-2">
                    <div className="col-sm-4">
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 fs-14 fw-semibold"> Neurology</h6>
                        <p className="mb-0">25 Jan 2024, 09:00am</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="mb-1 fs-14 fw-semibold">Patient</h6>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm me-2">
                          <ImageWithBasePath src="assets/img/avatars/avatar-03.jpg" alt="patient" />
                        </span>
                        <div>
                          <p className="fs-13 mb-0 text-truncate">James Carter</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="fs-14 fw-semibold mb-1">Doctor</h6>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm me-2">
                          <ImageWithBasePath src="assets/img/doctors/doctor-03.jpg" alt="doctor" />
                        </span>
                        <div>
                          <p className="fs-13 mb-0 text-truncate">Dr. Andrew Clark</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="mb-2">Reason for Visit</h6>
                <div className="d-flex align-items-center gap-2 mb-4">
                  <span>Fever, Stomach Pain, Drowsiness</span>
                </div>
                <h6 className="mb-2">Assessment</h6>
                <ol className="ps-3 mb-4">
                  <li className="mb-2">
                    Applying a cool compress to the forehead or the back of the neck
                    may provide some relief. Avoid using cold water, as it can cause
                    shivering and may increase body temperature.
                  </li>
                  <li>
                    Keep an eye on the person's symptoms and seek medical attention if
                    the fever persists, is very high, or if there are other concerning
                    symptoms such as difficulty breathing, persistent vomiting, or
                    severe headache.
                  </li>
                </ol>
                <h6 className="mb-2">Treatment</h6>
                <p className="mb-4">1 Multiple Access</p>
                <h6 className="mb-2">Follow Up</h6>
                <p className="mb-4">After 3 Months</p>
                <h6 className="mb-2">Notes</h6>
                <p className="mb-4">
                  If the fever is accompanied by other worrisome symptoms or if it
                  lasts for more than a few days, it's essential to consult with a
                  healthcare professional. They can provide a proper diagnosis and
                  recommend appropriate treatment.
                </p>
                <h6 className="mb-2">Payment Status</h6>
                <span className="badge bg-success">Paid : Cash</span>
              </div>
            </div>
          </div>
        </div>
        {/* End view Modal */}
    </>
  );
};

export default VisitsModal;
