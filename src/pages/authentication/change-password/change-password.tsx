import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";
import logo from "../../../assets/img/VMlogo.png";
import loginDoctorImg from "../../../assets/img/login-doctor.jpg";

type PasswordField = "newPassword" | "confirmPassword";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const isStrongPassword = (value: string) =>
    /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(value);

  const showNewPasswordHint = isNewPasswordFocused && !isStrongPassword(formData.newPassword);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { newPassword: "", confirmPassword: "" };
    let isValid = true;

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "This field is required";
      isValid = false;
    } else if (!isStrongPassword(formData.newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters and include one special character";
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "This field is required";
      isValid = false;
    } else if (
      formData.newPassword &&
      formData.confirmPassword !== formData.newPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        navigate(all_routes.login);
      }, 500);
    }
  };

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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, 14px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(14px, -10px); }
        }
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        .login-page-wrapper {
          height: 100vh;
          overflow: hidden;
        }
        .login-anim-card {
          animation: fadeSlideUp 0.6s ease-out;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .login-anim-card:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
        }
        .login-anim-logo {
          animation: fadeSlideUp 0.6s ease-out;
        }
        .login-input-anim .form-control,
        .login-input-anim .input-group-text {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .login-input-anim .input-group:focus-within .input-group-text,
        .login-input-anim .input-group:focus-within .form-control {
          background-color: #fff !important;
          border-color: var(--bs-primary) !important;
        }
        .login-input-anim .input-group:focus-within .input-group-text i {
          color: var(--bs-primary) !important;
        }
        .login-input-anim .input-group.is-invalid-group .input-group-text,
        .login-input-anim .input-group.is-invalid-group .form-control {
          border-color: var(--bs-danger) !important;
        }
        .login-btn-anim {
          transition: transform 0.15s ease, box-shadow 0.2s ease;
          position: relative;
        }
        .login-btn-anim:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0.5rem 1.25rem rgba(var(--bs-primary-rgb), 0.35);
        }
        .login-btn-anim:active:not(:disabled) {
          transform: translateY(0);
        }
        .login-btn-anim:disabled {
          opacity: 0.85;
          cursor: progress;
        }
        .login-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          display: inline-block;
          margin-right: 8px;
          vertical-align: middle;
        }
        .login-link-anim {
          transition: color 0.2s ease;
          position: relative;
        }
        .login-link-anim::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--bs-primary);
          transition: width 0.25s ease;
        }
        .login-link-anim:hover::after {
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
          .login-page-wrapper {
            height: auto;
            min-height: 100vh;
            overflow: auto;
          }
        }
      `}</style>

      <div className="container-fluid position-relative z-1 login-page-wrapper p-0">
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
              <div className="w-100 px-4 px-lg-5 d-flex flex-column align-items-center" style={{ maxWidth: "480px" }}>

                <div className="w-100 text-center mb-4 login-anim-logo">
                  <img
                    src={logo}
                    alt="Viyam Capture"
                    style={{ width: "160px" }}
                  />
                </div>

                <div className="card shadow-sm border-0 rounded-4 p-4 w-100 login-anim-card login-input-anim">
                  <div className="mb-4 text-center">
                    <h4 className="fw-bold text-dark mb-1">Change Password</h4>
                    <p className="text-muted fs-14 mb-0">Set a new password for your account</p>
                  </div>

                  <form onSubmit={handleChangePassword}>
                    {/* New Password */}
                    <div className="mb-1">
                      <label className="form-label fw-medium">
                        New Password<span className="text-danger ms-1">*</span>
                      </label>
                      <div className={`input-group ${errors.newPassword ? "is-invalid-group" : ""}`}>
                        <span className="input-group-text bg-light border-end-0">
                          <i className="ti ti-lock text-muted" />
                        </span>
                        <input
                          type={passwordVisibility.newPassword ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          onFocus={() => setIsNewPasswordFocused(true)}
                          onBlur={() => setIsNewPasswordFocused(false)}
                          className={`form-control border-start-0 bg-light ${errors.newPassword ? "is-invalid" : ""}`}
                          placeholder="Enter new password"
                          autoComplete="new-password"
                        />
                        <span
                          className="input-group-text bg-light"
                          onClick={() => togglePasswordVisibility("newPassword")}
                          style={{ cursor: "pointer" }}
                        >
                          <i className={`ti ${passwordVisibility.newPassword ? "ti-eye" : "ti-eye-off"} text-muted`} />
                        </span>
                      </div>
                      {errors.newPassword ? (
                        <small className="text-danger">{errors.newPassword}</small>
                      ) : (
                        <div className={`password-hint-anim ${showNewPasswordHint ? "show" : ""}`}>
                          <small className="text-muted">
                            Password must be at least 8 characters and include one special character
                          </small>
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-3 mt-3">
                      <label className="form-label fw-medium">
                        Confirm Password<span className="text-danger ms-1">*</span>
                      </label>
                      <div className={`input-group ${errors.confirmPassword ? "is-invalid-group" : ""}`}>
                        <span className="input-group-text bg-light border-end-0">
                          <i className="ti ti-lock text-muted" />
                        </span>
                        <input
                          type={passwordVisibility.confirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`form-control border-start-0 bg-light ${errors.confirmPassword ? "is-invalid" : ""}`}
                          placeholder="Re-enter new password"
                          autoComplete="new-password"
                        />
                        <span
                          className="input-group-text bg-light"
                          onClick={() => togglePasswordVisibility("confirmPassword")}
                          style={{ cursor: "pointer" }}
                        >
                          <i className={`ti ${passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"} text-muted`} />
                        </span>
                      </div>
                      {errors.confirmPassword && (
                        <small className="text-danger">{errors.confirmPassword}</small>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100 login-btn-anim" disabled={isSubmitting}>
                      {isSubmitting && <span className="login-spinner" />}
                      {isSubmitting ? "Updating..." : "Change Password"}
                    </button>
                  </form>

                  <div className="text-center mt-3">
                    <span className="text-muted fs-14">Remember your password? </span>
                    <Link to={all_routes.login} className="text-primary fs-14 fw-medium login-link-anim">
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

export default ChangePassword;
