import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import CommonSelect, { type Option } from "../../components/common-select/commonSelect";
import CommonMultiSelect from "../../components/common-select/commonMultiSelect";
import { CPTCodes, ICDCodes } from "../../core/json/icdCptOptions";

type PatientOption = { value: string; label: string; dob: string; mrn: string; providerCode: string };

const AllPatients: PatientOption[] = [
  { value: "p1", label: "John Doe", dob: "02/22/2026", mrn: "MRN10234", providerCode: "andrew_clark" },
  { value: "p2", label: "Mary Smith", dob: "09/23/1990", mrn: "MRN10235", providerCode: "andrew_clark" },
  { value: "p3", label: "Robert Johnson", dob: "01/30/1978", mrn: "MRN10236", providerCode: "katherine_brooks" },
  { value: "p4", label: "Linda Williams", dob: "07/15/1982", mrn: "MRN10237", providerCode: "katherine_brooks" },
  { value: "p5", label: "Michael Brown", dob: "11/02/1995", mrn: "MRN10238", providerCode: "benjamin_harris" },
  { value: "p6", label: "Patricia Davis", dob: "03/19/1988", mrn: "MRN10239", providerCode: "benjamin_harris" },
  { value: "p7", label: "John Doe", dob: "05/14/1979", mrn: "MRN10299", providerCode: "katherine_brooks" },
];

const ProvidersByCode: Record<string, { value: string; label: string }> = {
  andrew_clark: { value: "andrew_clark", label: "Dr. Andrew Clark" },
  katherine_brooks: { value: "katherine_brooks", label: "Dr. Katherine Brooks" },
  benjamin_harris: { value: "benjamin_harris", label: "Dr. Benjamin Harris" },
};

const ProviderOptions = Object.values(ProvidersByCode);

const FacilityOptions = [
  { value: "facility1", label: "City Medical Center" },
  { value: "facility2", label: "Downtown Health Clinic" },
  { value: "facility3", label: "Sunrise Hospital" },
  { value: "facility4", label: "Green Valley Medical" },
];

const VisitTypeOptions = [
  { value: "follow_up", label: "Follow Up" },
  { value: "new_patient", label: "New Patient" },
  { value: "hospice_visit", label: "Hospice Visit" },
  { value: "home_visit", label: "Home Visit" },
  { value: "telehealth", label: "Telehealth" },
];

const PatientDropdownOptions = AllPatients.map((p) => ({
  value: p.value,
  label: `${p.label} (${p.mrn.slice(-4)}) (${p.dob})`,
}));

// Auto-formats raw digit input into MM/DD/YYYY as the user types
const formatDateInput = (raw: string): string => {
  const digits = raw.replace(/\D/g, "").slice(0, 8); // MM DD YYYY = 8 digits max
  const mm = digits.slice(0, 2);
  const dd = digits.slice(2, 4);
  const yyyy = digits.slice(4, 8);

  if (digits.length <= 2) return mm;
  if (digits.length <= 4) return `${mm}/${dd}`;
  return `${mm}/${dd}/${yyyy}`;
};

const AddSuperbill = () => {
  const [selectedPatient, setSelectedPatient] = useState<PatientOption | null>(null);
  const [isHospice, setIsHospice] = useState(false);
  const [dateOfService, setDateOfService] = useState("");

  const handlePatientChange = (option: Option | null) => {
    if (!option) {
      setSelectedPatient(null);
      return;
    }
    const found = AllPatients.find((p) => p.value === option.value) || null;
    setSelectedPatient(found);
  };

  const linkedProvider = selectedPatient
    ? ProvidersByCode[selectedPatient.providerCode]
    : null;

  const selectedPatientDisplay: Option | undefined = selectedPatient
    ? {
        value: selectedPatient.value,
        label: `${selectedPatient.label} (${selectedPatient.mrn.slice(-4)}) (${selectedPatient.dob})`,
      }
    : undefined;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-0">Add E-Superbill</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Add E-Superbill</li>
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

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card mb-0">
              <div className="card-body p-3">

                {/* Patient & Provider */}
                <div className="row g-2">
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      Patient Name<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={PatientDropdownOptions}
                      className="select"
                      placeholder="Search and select patient"
                      onChange={handlePatientChange}
                      key={selectedPatient?.value || "patient-empty"}
                      defaultValue={selectedPatientDisplay}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      Provider Name<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={ProviderOptions}
                      className="select"
                      placeholder={
                        selectedPatient ? "" : "Select a patient first"
                      }
                      key={linkedProvider?.value || "provider-empty"}
                      defaultValue={linkedProvider || undefined}
                    />
                  </div>
                </div>

                {/* DOS & Facility */}
                <div className="row g-2 mt-1">
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      Date of Service<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/DD/YYYY"
                      value={dateOfService}
                      onChange={(e) => setDateOfService(formatDateInput(e.target.value))}
                      maxLength={10}
                      inputMode="numeric"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      Facility<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={FacilityOptions}
                      className="select"
                      placeholder="Select facility"
                    />
                  </div>
                </div>

                {/* Visit Type & Hospice */}
                <div className="row g-2 mt-1">
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      Visit Type<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={VisitTypeOptions}
                      className="select"
                      placeholder="Select visit type"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label d-block mb-1">Hospice</label>
                    <div
                      className={`d-flex align-items-center gap-2 px-3 rounded border ${isHospice ? "border-primary bg-primary bg-opacity-10" : ""}`}
                      style={{ cursor: "pointer", height: "38px" }}
                      onClick={() => setIsHospice(!isHospice)}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input mt-0 flex-shrink-0"
                        id="hospiceCheck"
                        checked={isHospice}
                        onChange={(e) => setIsHospice(e.target.checked)}
                        style={{ width: "18px", height: "18px", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>

                {/* CPT & ICD Codes */}
                <div className="row g-2 mt-1">
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      CPT Codes<span className="text-danger ms-1">*</span>
                      <span className="text-muted fs-12 ms-2">(Select 1 to 10)</span>
                    </label>
                    <CommonMultiSelect
                      options={CPTCodes}
                      className="select"
                      placeholder="Search CPT codes"
                      maxSelections={10}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mb-1">
                      ICD Codes<span className="text-danger ms-1">*</span>
                      <span className="text-muted fs-12 ms-2">(Select 1 to 12)</span>
                    </label>
                    <CommonMultiSelect
                      options={ICDCodes}
                      className="select"
                      placeholder="Search ICD codes"
                      maxSelections={11}
                    />
                  </div>
                </div>

                {/* Remarks */}
                <div className="row g-2 mt-1">
                  <div className="col-md-12">
                    <label className="form-label mb-1">Remarks</label>
                    <textarea
                      rows={2}
                      className="form-control"
                      placeholder="Additional notes (optional)"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-3 pt-2 border-top">
                  <Link to={all_routes.eSuperbillList} className="btn btn-white">
                    Close
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default AddSuperbill;
