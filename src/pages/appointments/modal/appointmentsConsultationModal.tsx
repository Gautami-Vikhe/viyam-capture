

const AppointmentsConsultationModal = () => {
  return (
    <>
  {/* Start view Modal */}
  <div id="medical_history" className="modal fade">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header justify-content-between">
          <h5 className="modal-title text-truncate">Medical History</h5>
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
          <div className="d-flex align-items-center mb-4">
            <div className="avatar flex-shrink-0 bg-primary">
              <i className="ti ti-history fs-16" />
            </div>
            <div className="ms-2">
              <div>
                <h6 className="fw-semibold fs-14 text-truncate mb-1">
                  Throat Pain
                </h6>
                <p className="fs-13 mb-0">25 Jan 2024, (2yrs ago)</p>
              </div>
            </div>
          </div>
          <h6 className="mb-2">Assessment</h6>
          <ol className="ps-3">
            <li className="mb-2">
              Applying a cool compress to the forehead or the back of the neck
              may provide some relief. Avoid using cold water, as it can cause
              shivering and may increase body temperature.
            </li>
            <li className="mb-4">
              Keep an eye on the person's symptoms and seek medical attention if
              the fever persists, is very high, or if there are other concerning
              symptoms such as difficulty breathing, persistent vomiting, or
              severe headache.
            </li>
          </ol>
          <h6 className="fw-semibold mb-2">Notes</h6>
          <p className="mb-0">
            If the fever is accompanied by other worrisome symptoms or if it
            lasts for more than a few days, it's essential to consult with a
            healthcare professional. They can provide a proper diagnosis and
            recommend appropriate treatment.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* End view Modal */}
</>

  )
}

export default AppointmentsConsultationModal