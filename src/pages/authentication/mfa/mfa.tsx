import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginDoctorImg from "../../../assets/img/login-doctor.jpg";

const MFA = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = ["", "", "", "", "", ""];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    const lastIndex = Math.min(pasted.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setOtp(["", "", "", "", "", ""]);
    setResendTimer(30);
    setCanResend(false);
    inputRefs.current[0]?.focus();
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <>
      <div className="main-wrapper">
        <div className="row h-100vh w-100 m-0">

          {/* Left Panel */}
          <div
            className="col-xl-6 col-lg-6 d-none d-lg-flex flex-column justify-content-end p-0 position-relative overflow-hidden"
            style={{ minHeight: "100vh" }}
          >
            <div className="position-absolute w-100 h-100 top-0 start-0">
              <img
                src={loginDoctorImg}
                alt="MFA background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,42,80,0.05) 0%, rgba(15,42,80,0.97) 100%)",
                }}
              />
            </div>

            <div className="position-relative z-1 p-5 text-white">
              <h2 className="fw-bold mb-3 text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,1)" }}>
                Intelligent Provider Charge Capture & Revenue Optimization Platform
              </h2>
              <p className="fs-15 mb-0 text-white fw-medium" style={{ textShadow: "0 2px 8px rgba(0,0,0,1)" }}>
                Eliminating paper superbills and streamlining the charge capture
                process for healthcare providers.
              </p>
            </div>
          </div>

          {/* Right Panel — MFA Form */}
          <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center justify-content-center p-4">
            <div className="w-100" style={{ maxWidth: "420px" }}>

              {/* Shield Icon */}
              <div className="text-center mb-4">
                <span className="avatar avatar-xl bg-primary-transparent text-primary rounded-circle mb-3 d-inline-flex align-items-center justify-content-center">
                  <i className="ti ti-shield-check fs-32" />
                </span>
                <h3 className="fw-bold mb-1">Two-Factor Authentication</h3>
                <p className="text-muted fs-14 mb-0">
                  Enter the 6-digit code sent to your registered
                </p>
                <p className="text-muted fs-14">
                  email{" "}
                  <span className="fw-semibold text-dark">ad***@example.com</span>
                </p>
              </div>

              {/* OTP Input Boxes */}
              <div
                className="d-flex justify-content-center gap-2 mb-4"
                onPaste={handlePaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="form-control text-center fw-bold fs-20"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    style={{
                      width: "52px",
                      height: "56px",
                      borderRadius: "10px",
                      border: digit
                        ? "2px solid var(--bs-primary)"
                        : "1.5px solid #dee2e6",
                      outline: "none",
                      transition: "border 0.2s",
                    }}
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="button"
                className="btn btn-primary w-100 mb-3"
                disabled={!isComplete}
                onClick={() => setShowDisclaimer(true)}
              >
                <i className="ti ti-check me-2" />
                Verify OTP
              </button>

              {/* Resend OTP */}
              <div className="text-center mb-3">
                {canResend ? (
                  <button
                    type="button"
                    className="btn btn-link p-0 text-primary fs-14"
                    onClick={handleResend}
                  >
                    <i className="ti ti-refresh me-1" />
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-muted fs-14 mb-0">
                    Resend OTP in{" "}
                    <span className="fw-semibold text-primary">
                      00:{resendTimer.toString().padStart(2, "0")}
                    </span>
                  </p>
                )}
              </div>

              {/* Back to Login */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-muted fs-14 d-inline-flex align-items-center gap-1"
                >
                  <i className="ti ti-arrow-left fs-14" />
                  Back to Login
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Legal Disclaimer</h5>
              </div>
              <div className="modal-body">
                <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ddd", padding: "15px", borderRadius: "5px", marginBottom: "20px", fontSize: "14px", lineHeight: "1.6" }}>
                  <p>This application is intended for use by authorized healthcare providers only.</p>
                  <p>The information contained in this system is confidential and protected under HIPAA regulations.</p>
                  <p>By using this application, you agree to maintain the confidentiality of all patient information.</p>
                  <p>Unauthorized access or disclosure of patient information is strictly prohibited and may result in legal action.</p>
                  <p>Viyam Capture is not responsible for any errors in charge capture resulting from incorrect data entry.</p>
                  <p>All submitted charges are subject to review and approval by the billing team.</p>
                  <p>Users are responsible for ensuring accuracy of all ICD and CPT codes entered.</p>
                  <p>This system should only be accessed on secure and authorized devices.</p>
                  <p>Any suspicious activity must be reported to the system administrator immediately.</p>
                  <p>By accepting these terms, you confirm that you are an authorized user of this system.</p>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acceptCheck"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="acceptCheck">
                    I have read and accept the disclaimer
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => { setShowDisclaimer(false); setAccepted(false); navigate("/login"); }}
                  className="btn btn-outline-danger"
                >
                  Decline
                </button>
                <button
                  onClick={() => { if (accepted) navigate("/index"); }}
                  disabled={!accepted}
                  className="btn btn-primary"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MFA;