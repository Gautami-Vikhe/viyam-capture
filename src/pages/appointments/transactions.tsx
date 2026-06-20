import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import TransactionChart from "./chart/transactionChart";

const Transactions = () => {
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
              <h4 className="mb-1">Transactions</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Transactions</li>
                </ol>
              </div>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <Link
                to="#"
                className="btn btn-icon btn-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Refresh"
                data-bs-original-title="Refresh"
              >
                <i className="ti ti-refresh" />
              </Link>
              <Link
                to="#"
                className="btn btn-icon btn-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Print"
                data-bs-original-title="Print"
              >
                <i className="ti ti-printer" />
              </Link>
              <Link
                to="#"
                className="btn btn-icon btn-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Download"
                data-bs-original-title="Download"
              >
                <i className="ti ti-cloud-download" />
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* card start */}
          <div className="card">
            <div className="card-body">
              <div className="row row-gap-3 row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
                <div className="col text-center border-sm-end">
                  <p className="mb-1 text-truncate">Total Transactions</p>
                  <h6 className="fw-semibold mb-0">$54,644.54</h6>
                </div>
                <div className="col text-center border-md-end">
                  <p className="mb-1 text-truncate">Last Month</p>
                  <h6 className="fw-semibold mb-0">$4,64,454</h6>
                </div>
                <div className="col text-center border-sm-end border-md-0 border-xl-end">
                  <p className="mb-1 text-truncate">This Month</p>
                  <h6 className="fw-semibold mb-0">
                    $2,45,445{" "}
                    <span className="ms-1">
                      <i className="ti ti-square-rounded-chevron-up-filled text-success" />
                    </span>
                  </h6>
                </div>
                <div className="col text-center border-md-end">
                  <p className="mb-1 text-truncate">Last week</p>
                  <h6 className="fw-semibold mb-0">
                    $2,64,454{" "}
                    <span className="ms-1">
                      <i className="ti ti-square-rounded-chevron-down-filled text-danger" />
                    </span>
                  </h6>
                </div>
                <div className="col text-center border-sm-end">
                  <p className="mb-1 text-truncate">This Week</p>
                  <h6 className="fw-semibold mb-0">
                    $2,45,445{" "}
                    <span className="ms-1">
                      <i className="ti ti-square-rounded-chevron-up-filled text-success" />
                    </span>
                  </h6>
                </div>
                <div className="col text-center">
                  <p className="mb-1 text-truncate">Today</p>
                  <h6 className="fw-semibold mb-0">
                    $2,45,445{" "}
                    <span className="ms-1">
                      <i className="ti ti-square-rounded-chevron-up-filled text-success" />
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div className="card">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="fs-16 fw-semibold mb-0 text-truncate">
                  Transactions
                </h6>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-calendar me-1" />
                    2025
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        2025
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        2024
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        2023
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chart-set" id="transaction-chart">
                <TransactionChart/>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div className="card mb-0">
            <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h5 className="d-inline-flex align-items-center mb-0">
                Total Transactions
                <span className="badge bg-danger ms-2">658</span>
              </h5>
              <div className="d-flex align-items-center">
                {/* sort by */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-sort-descending-2 me-1" />
                    <span className="me-1">Sort By : </span> Newest
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Newest
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Oldest
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* table start */}
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th className="no-sort">
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="select-all"
                          />
                        </div>
                      </th>
                      <th>ID</th>
                      <th>Patient Name</th>
                      <th className="no-sort">Description</th>
                      <th className="no-sort">Transaction Date</th>
                      <th className="no-sort">Amount</th>
                      <th className="no-sort">Payment Method</th>
                      <th className="no-sort">Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0025</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-05.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                James Carter
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          Payment for a follow-up appointment
                        </p>
                      </td>
                      <td>17 Jun 2025</td>
                      <td>$500</td>
                      <td>Cash</td>
                      <td>
                        <span className="badge badge-md badge-soft-success">
                          Completed
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0024</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-34.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Emily Davis
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Diagnostic Test Payment</p>
                      </td>
                      <td>10 Jun 2025</td>
                      <td>$500</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-warning">
                          Pending
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0023</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-06.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Michael Johnson
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          Fee for consultations with a Doctor
                        </p>
                      </td>
                      <td>22 May 2025</td>
                      <td>$300</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-success">
                          Completed
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0022</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-25.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Olivia Miller
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          Medical Equipment Purchase Payment
                        </p>
                      </td>
                      <td>15 May 2025</td>
                      <td>$200</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-warning">
                          Pending
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0021</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-14.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                David Smith
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Flu Shot or Vaccination</p>
                      </td>
                      <td>30 Apr 2025</td>
                      <td>$100</td>
                      <td>Cash</td>
                      <td>
                        <span className="badge badge-md badge-soft-success">
                          Completed
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0020</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-22.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Sophia Wilson
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Medication Refill Fee Payment</p>
                      </td>
                      <td>25 Apr 2025</td>
                      <td>$600</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-warning">
                          Pending
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0019</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-30.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Daniel Williams
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Physical Therapy Session Payment</p>
                      </td>
                      <td>13 Mar 2025</td>
                      <td>$700</td>
                      <td>Cash</td>
                      <td>
                        <span className="badge badge-md badge-soft-success">
                          Completed
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0018</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-24.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Isabella Anderson
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Vision Exam Payment</p>
                      </td>
                      <td>16 Feb 2025</td>
                      <td>$800</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-warning">
                          Pending
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0017</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-15.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                William Brown
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">X-ray or Imaging Payment</p>
                      </td>
                      <td>20 Jan 2025</td>
                      <td>$900</td>
                      <td>Cash</td>
                      <td>
                        <span className="badge badge-md badge-soft-success">
                          Completed
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.transactionsDetails}>#TS0016</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-39.jpg"
                              alt="img"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>
                                Charlotte Taylor
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Allergy Testing Service Payment</p>
                      </td>
                      <td>15 Jan 2025</td>
                      <td>$500</td>
                      <td>Paytm</td>
                      <td>
                        <span className="badge badge-md badge-soft-warning">
                          Pending
                        </span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.transactionsDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table start */}
            </div>
          </div>
          {/* card start */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    
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
              <Link to={all_routes.transactions} className="btn btn-danger w-100">
                Yes, Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Delete Modal  */}

    </>
  );
};

export default Transactions;
