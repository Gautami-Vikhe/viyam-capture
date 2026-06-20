import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";

const AppointmentCalendarModal = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <>
      {/* Start view Modal */}
      <div
        id="appointment_details"
        className="modal fade"
        ref={ref} // <-- Correct ref usage
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <h5 className="modal-title text-truncate">Appointment Details</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-circle-x-filled" />
              </button>
            </div>

            <div className="modal-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 position-relative pe-1">
                    <ImageWithBasePath
                      src="assets/img/avatars/avatar-12.jpg"
                      alt="patient"
                      className="img-fluid avatar"
                    />
                    <span className="avatar-xxs fs-10 rounded-circle bg-dark text-white position-absolute end-0 bottom-0 d-flex align-items-center justify-content-center">
                      <i className="ti ti-video" />
                    </span>
                  </div>

                  <div className="ms-2">
                    <div>
                      <h6 className="fw-semibold fs-14 text-truncate mb-1">
                        Olivia Miller
                      </h6>
                      <p className="fs-13 mb-0">#PT0022</p>
                    </div>
                  </div>
                </div>

                <span className="badge badge-soft-primary">Upcoming</span>
              </div>

              <div className="mb-3">
                <h6 className="mb-2">Date &amp; Time</h6>
                <p className="mb-1">$500 / 1 Hr</p>
                <p>24th Jan 2024, 09:00 AM to 10:00 PM</p>
              </div>

              <div className="mb-3">
                <h6 className="mb-2">Consultation With</h6>
                <p className="mb-1">Dr. Laird</p>
                <p>Dermatologist</p>
              </div>

              <div className="mb-3">
                <h6 className="mb-2">Reason</h6>
                <p className="mb-0">Fever, Stomach Pain, Drowsiness</p>
              </div>

              <div className="mb-3">
                <h6 className="mb-2">Notes</h6>
                <p className="mb-0">
                  Provide detailed instructions on how to use prescribed
                  medications. Include dosage, frequency, and any specific
                  application guidelines.
                </p>
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

              <Link
                to={all_routes.appointmentConsultation}
                className="btn btn-primary"
              >
                Start Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End view Modal */}
    </>
  );
});

export default AppointmentCalendarModal;
