import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";
import logo from "../../../assets/img/VMlogo.png";
import loginDoctorImg from "../../../assets/img/login-doctor.jpg";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const isStrongPassword = (value: string) =>
    /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(value);

  const showPasswordHint = isPasswordFocused && !isStrongPassword(password);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, 14px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(14px, -10px); }
        }
        .signup-page-wrapper {
          height: 100vh;
          overflow: hidden;
        }
        .signup-anim-card {
          animation: fadeSlideUp 0.6s ease-out;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .signup-anim-card:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
        }
        .signup-anim-logo {
          animation: fadeSlideUp 0.6s ease-out;
        }
        .signup-cover-animated {
          background-size: 200% 200%;
          animation: gradientShift 12s ease infinite;
          overflow: hidden;
        }
        .signup-blob {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }
        .signup-blob-1 {
          width: 260px;
          height: 260px;
          top: -60px;
          right: -60px;
          animation: floatSlow 14s ease-in-out infinite;
        }
        .signup-blob-2 {
          width: 180px;
          height: 180px;
          bottom: -40px;
          left: -40px;
          background: rgba(255,255,255,0.06);
          animation: floatSlower 16s ease-in-out infinite;
        }
        .signup-input-anim .form-control,
        .signup-input-anim .input-group-text {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .signup-input-anim .input-group:focus-within .input-group-text,
        .signup-input-anim .input-group:focus-within .form-control {
          background-color: #fff !important;
          border-color: var(--bs-primary) !important;
        }
        .signup-input-anim .input-group:focus-within .input-group-text i {
          color: var(--bs-primary) !important;
        }
        .signup-btn-anim {
          transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .signup-btn-anim:hover {
          transform: translateY(-1px);
          box-shadow: 0 0.5rem 1.25rem rgba(var(--bs-primary-rgb), 0.35);
        }
        .signup-btn-anim:active {
          transform: translateY(0);
        }
        .signup-link-anim {
          transition: color 0.2s ease;
          position: relative;
        }
        .signup-link-anim::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--bs-primary);
          transition: width 0.25s ease;
        }
        .signup-link-anim:hover::after {
          width: 100%;
        }
        .password-hint-anim {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.25s ease, opacity 0.2s ease, margin-top 0.25s ease;
          margin-top: 0;
        }
        .password-hint-anim.show {
          max-height: 50px;
          opacity: 1;
          margin-top: 6px;
        }
        @media (max-width: 991.98px) {
          .signup-page-wrapper {
            height: auto;
            min-height: 100vh;
            overflow: auto;
          }
        }
      `}</style>

      <div className="container-fluid position-relative z-1 signup-page-wrapper p-0">
        <div className="w-100 h-100 overflow-hidden position-relative flex-wrap d-block bg-white">
          <div className="row h-100 m-0">

           {/* LEFT SIDE */}
            <div className="col-lg-6 p-0 d-none d-lg-flex">
              <div
                className="w-100 d-flex align-items-end justify-content-center position-relative"
                style={{
                  backgroundImage: `url(${loginDoctorImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,42,80,0.05) 0%, rgba(15,42,80,0.9) 100%)",
                  }}
                />
                <div className="authentication-card position-relative z-1 pb-4 px-5">
                  <div className="authen-overlay-item w-100">
                    <div className="authen-head text-center">
                      <h1 className="text-white fs-24 fw-bold mb-2">
                        Intelligent Provider Charge Capture &amp; Revenue
                        Optimization Platform
                      </h1>
                      <p className="text-light fs-14 fw-normal mb-0">
                        Viyam Capture is a modern healthcare charge capture
                        platform designed to eliminate paper superbills, reduce
                        missed charges, improve coding accuracy, and accelerate
                        the revenue cycle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center bg-white h-100 py-4">
              <div className="w-100 px-4 px-lg-5 d-flex flex-column align-items-center" style={{ maxWidth: "520px" }}>

                <div className="w-100 text-center mb-4 signup-anim-logo">
                  <img
                    src={logo}
                    alt="Viyam Capture"
                    style={{ width: "150px" }}
                  />
                </div>

                <div className="card shadow-sm border-0 rounded-4 p-4 w-100 signup-anim-card signup-input-anim">
                  <div className="mb-3 text-center">
                    <h4 className="fw-bold text-dark mb-1">Create Account</h4>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="ti ti-mail text-muted" />
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0 bg-light"
                        placeholder="Enter email"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Password & Confirm Password in one row */}
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <label className="form-label fw-medium">
                        Password<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="ti ti-lock text-muted" />
                        </span>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setIsPasswordFocused(true)}
                          onBlur={() => setIsPasswordFocused(false)}
                          className="form-control border-start-0 bg-light"
                          placeholder="Password"
                        />
                      </div>
                      <div className={`password-hint-anim ${showPasswordHint ? "show" : ""}`}>
                        <small className="text-muted">
                          Must be at least 8 characters and include one special character
                        </small>
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-medium">
                        Confirm<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="ti ti-lock text-muted" />
                        </span>
                        <input
                          type="password"
                          className="form-control border-start-0 bg-light"
                          placeholder="Confirm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button type="button" className="btn btn-primary w-100 signup-btn-anim">
                      Create Account
                    </button>
                  </div>

                  <div className="text-center mt-2">
                    <span className="text-muted fs-14">Already have an account? </span>
                    <Link to={all_routes.login} className="text-primary fs-14 fw-medium signup-link-anim">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
