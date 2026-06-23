import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";

const eSuperbillData = {
  id: "SB001",
  providerName: "Dr. Andrew Clark",
  patientName: "John Doe",
  patientDob: "1985-04-12",
  patientMrn: "MRN10234",
  dateOfService: "10 Jun 2025",
  facility: "City Medical Center",
  visitType: "Follow Up",
  isHospice: false,
  cptCodes: ["99213", "93000"],
  icdCodes: ["J06.9", "I10"],
  remarks: "Patient follow-up after respiratory infection.",
  status: "CODING_REVIEW",
};

const superbillStatuses = [
  { code: "DRAFT", displayName: "Draft", displayOrder: 1 },
  { code: "SUBMITTED", displayName: "Submitted", displayOrder: 2 },
  { code: "CODING_REVIEW", displayName: "Coding Review", displayOrder: 3 },
  { code: "CODING_COMPLETED", displayName: "Coding Completed", displayOrder: 5 },
  { code: "APPROVED", displayName: "Approved", displayOrder: 6 },
  { code: "BILLED", displayName: "Billed", displayOrder: 7 },
];

const ESuperbillDetails = () => {
  const currentOrder = superbillStatuses.find((s) => s.code === eSuperbillData.status)?.displayOrder || 0;
  const isTerminalException = eSuperbillData.status === "RETURNED" || eSuperbillData.status === "VOID";

  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">E-Superbill Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.eSuperbillList}>E-Superbills</Link>
                </li>
                <li className="breadcrumb-item active">E-Superbill Details</li>
              </ol>
            </div>
            <Link
              to={all_routes.eSuperbillList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to E-Superbills
            </Link>
          </div>

          {/* Progress Section — STEPPER, unchanged */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="fw-bold mb-0 d-flex align-items-center gap-2">
                  <i className="ti ti-progress text-primary fs-18" />
                  Submission Progress
                </h6>
                {isTerminalException ? (
                  <span className="badge badge-soft-danger fs-12">
                    <i className={`ti ${eSuperbillData.status === "RETURNED" ? "ti-corner-up-left" : "ti-ban"} me-1`} />
                    {eSuperbillData.status === "RETURNED" ? "Returned" : "Void"}
                  </span>
                ) : (
                  <span className="badge badge-soft-primary fs-12">
                    {superbillStatuses.find((s) => s.code === eSuperbillData.status)?.displayName}
                  </span>
                )}
              </div>

              {eSuperbillData.status === "RETURNED" && (
                <div className="alert alert-danger d-flex align-items-start gap-2 mb-3 py-2 px-3">
                  <i className="ti ti-alert-triangle fs-16 mt-1 flex-shrink-0" />
                  <small>This superbill was returned and needs correction before it can proceed.</small>
                </div>
              )}
              {eSuperbillData.status === "VOID" && (
                <div className="alert alert-secondary d-flex align-items-start gap-2 mb-3 py-2 px-3">
                  <i className="ti ti-ban fs-16 mt-1 flex-shrink-0" />
                  <small>This superbill has been voided and is no longer active.</small>
                </div>
              )}

              {/* Stepper */}
              <div className="d-flex align-items-start" style={{ overflowX: "auto" }}>
                {superbillStatuses.map((step, idx) => {
                  const isCompleted = step.displayOrder < currentOrder;
                  const isCurrent = step.code === eSuperbillData.status;

                  return (
                    <div key={step.code} className="d-flex align-items-start flex-shrink-0">
                      <div className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
                        <span
                          className={`avatar avatar-sm rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 ${
                            isCompleted
                              ? "bg-success text-white"
                              : isCurrent && !isTerminalException
                              ? "bg-primary text-white"
                              : "bg-light text-muted border"
                          }`}
                        >
                          {isCompleted ? (
                            <i className="ti ti-check fs-14" />
                          ) : (
                            <span className="fs-12 fw-bold">{idx + 1}</span>
                          )}
                        </span>
                        <small
                          className={`fs-11 mt-1 text-center ${
                            isCurrent && !isTerminalException
                              ? "fw-bold text-primary"
                              : isCompleted
                              ? "text-success"
                              : "text-muted"
                          }`}
                        >
                          {step.displayName}
                        </small>
                      </div>
                      {idx < superbillStatuses.length - 1 && (
                        <div
                          style={{
                            height: "2px",
                            width: "30px",
                            backgroundColor: isCompleted ? "#28a745" : "#dee2e6",
                            marginTop: "16px",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bill Information — fills space evenly using grid columns */}
          <div className="card mb-4">
            <div className="card-body">

              {/* Row 1: Identity + Provider + Patient + DOB + MRN + DOS — 6 equal columns */}
              <div className="row g-3 pb-3 mb-3 border-bottom">

                <div className="col-md-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-md bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="ti ti-file-invoice fs-18" />
                    </span>
                    <div>
                      <h6 className="mb-1 fw-bold">{eSuperbillData.id}</h6>
                      <span className={`badge ${eSuperbillData.isHospice ? "badge-soft-warning" : "badge-soft-success"} fs-11`}>
                        {eSuperbillData.isHospice ? "Hospice" : "Regular"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <small className="text-muted fs-11 text-uppercase d-block">Provider</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.providerName}</span>
                </div>

                <div className="col-md-2">
                  <small className="text-muted fs-11 text-uppercase d-block">Patient</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.patientName}</span>
                </div>

                <div className="col-md-2">
                  <small className="text-muted fs-11 text-uppercase d-block">Date of Birth</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.patientDob}</span>
                </div>

                <div className="col-md-2">
                  <small className="text-muted fs-11 text-uppercase d-block">MRN</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.patientMrn}</span>
                </div>

                <div className="col-md-2">
                  <small className="text-muted fs-11 text-uppercase d-block">Date of Service</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.dateOfService}</span>
                </div>

              </div>

              {/* Row 2: Facility + Visit Type + Hospice — 3 equal columns */}
              <div className="row g-3 pb-3 mb-3 border-bottom">
                <div className="col-md-4">
                  <small className="text-muted fs-11 text-uppercase d-block">Facility</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.facility}</span>
                </div>
                <div className="col-md-4">
                  <small className="text-muted fs-11 text-uppercase d-block">Visit Type</small>
                  <span className="fs-14 fw-semibold">{eSuperbillData.visitType}</span>
                </div>
                <div className="col-md-4">
                  <small className="text-muted fs-11 text-uppercase d-block">Hospice</small>
                  <span className={`badge ${eSuperbillData.isHospice ? "badge-soft-warning" : "badge-soft-secondary"}`}>
                    {eSuperbillData.isHospice ? "Yes" : "No"}
                  </span>
                </div>
              </div>

              {/* Remarks — full width */}
              {eSuperbillData.remarks && (
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex align-items-start gap-2">
                      <i className="ti ti-file-text text-primary fs-16 mt-1 flex-shrink-0" />
                      <div>
                        <small className="text-muted fs-11 text-uppercase d-block">Remarks</small>
                        <span className="fs-14">{eSuperbillData.remarks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* CPT Codes + ICD Codes — side by side */}
          <div className="row g-4">

            {/* CPT Codes */}
            <div className="col-md-6">
              <div className="card mb-0 h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-file-code text-primary fs-16" />
                    CPT Codes
                  </h6>
                  <span className="badge bg-primary fs-11">
                    {eSuperbillData.cptCodes.length} codes
                  </span>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    {eSuperbillData.cptCodes.map((code, idx) => (
                      <span
                        key={idx}
                        className="badge badge-soft-primary fs-13 d-inline-flex align-items-center gap-1 px-3 py-2"
                      >
                        <i className="ti ti-check fs-12" />
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ICD Codes */}
            <div className="col-md-6">
              <div className="card mb-0 h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-medical-cross text-warning fs-16" />
                    ICD Codes
                  </h6>
                  <span className="badge bg-warning fs-11">
                    {eSuperbillData.icdCodes.length} codes
                  </span>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    {eSuperbillData.icdCodes.map((code, idx) => (
                      <span
                        key={idx}
                        className="badge badge-soft-warning fs-13 d-inline-flex align-items-center gap-1 px-3 py-2"
                      >
                        <i className="ti ti-check fs-12" />
                        {code}
                      </span>
                    ))}
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

export default ESuperbillDetails;