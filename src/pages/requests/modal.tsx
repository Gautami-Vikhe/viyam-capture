import { Link } from "react-router-dom"
import { all_routes } from "../../routes/all_routes"


const Modal = () => {
  return (
  <>
  {/* Start confirm Modal  */}
  <div className="modal fade" id="confirm_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center position-relative">
          <div className="mb-3 position-relative z-1">
            <span className="avatar avatar-md avatar-md rounded-circle bg-success">
              <i className="ti ti-calendar-check fs-24" />
            </span>
          </div>
          <h6 className="fs-16 mb-1">Confirm Request</h6>
          <p className="mb-3">Are you sure you want to accept request?</p>
          <div className="d-flex justify-content-center gap-2">
            <Link
              to="#"
              className="btn btn-light w-100"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link
              to={all_routes.requests}
              className="btn btn-primary w-100"
              data-bs-dismiss="modal"
            >
              Yes, Accept
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End confirm Modal  */}
  {/* Start Delete Modal  */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body">
          <div className="text-center">
            <div className="mb-2">
              <span className="avatar avatar-md rounded-circle bg-danger">
                <i className="ti ti-calendar-x fs-24" />
              </span>
            </div>
            <h6 className="fs-16 mb-1">Reject Request</h6>
            <p className="mb-3">Are you sure you want to reject request?</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Reason</label>
            <textarea className="form-control" rows={3} defaultValue={""} />
          </div>
          <div className="d-flex justify-content-center gap-2">
            <Link
              to="#"
              className="btn btn-outline-light w-100"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.requests} className="btn btn-primary w-100">
              Yes, Reject
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Delete Modal  */}
</>

  )
}

export default Modal