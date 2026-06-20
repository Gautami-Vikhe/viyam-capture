import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/img/VMlogo.png";

const Disclaimer = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      navigate("/index");
    }
  };

  const handleDecline = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <img src={logo} alt="Viyam Capture" style={{ width: "150px", marginBottom: "20px" }} />
      <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "30px", maxWidth: "600px", width: "100%", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h4 style={{ color: "#1a2980", marginBottom: "20px" }}>Legal Disclaimer</h4>
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
        <div style={{ marginBottom: "20px" }}>
          <input
            type="checkbox"
            id="acceptCheck"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            style={{ marginRight: "10px" }}
          />
          <label htmlFor="acceptCheck">I have read and accept the disclaimer</label>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleAccept}
            disabled={!accepted}
            style={{ flex: 1, padding: "10px", backgroundColor: accepted ? "#1a2980" : "#ccc", color: "white", border: "none", borderRadius: "5px", cursor: accepted ? "pointer" : "not-allowed" }}
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            style={{ flex: 1, padding: "10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;