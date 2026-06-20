import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import React, { Suspense } from "react";

const Disclaimer = React.lazy(() => import("../pages/disclaimer/index"));
const Requests = React.lazy(() => import("../pages/requests/requests"));
const AppointmentCalendar = React.lazy(() => import("../pages/appointments/appointmentCalendar"));
const Transactions = React.lazy(() => import("../pages/appointments/transactions"));
const TransactionDetails = React.lazy(() => import("../pages/appointments/transactionDetails"));

// Settings
const FacilityList = React.lazy(() => import("../pages/settings/facilityList"));
const AddFacility = React.lazy(() => import("../pages/settings/addFacility"));
const EditFacility = React.lazy(() => import("../pages/settings/editFacility"));
const RoleList = React.lazy(() => import("../pages/settings/roleList"));
const AddRole = React.lazy(() => import("../pages/settings/addRole"));
const EditRole = React.lazy(() => import("../pages/settings/editRole"));
const RoleDetails = React.lazy(() => import("../pages/settings/roleDetails"));
const PermissionDetails = React.lazy(() => import("../pages/settings/permissionDetails"));

const ManageInvoicesDetails = React.lazy(
  () => import("../pages/manage-module/manage-invoices/manageInvoicesDetails")
);
const PlansBillingsSettings = React.lazy(
  () => import("../pages/manage-module/settings/plansBillingsSettings")
);
const PermissionSettings = React.lazy(
  () => import("../pages/manage-module/settings/permissionSettings")
);
const AppearanceSettings = React.lazy(
  () => import("../pages/manage-module/settings/appearanceSettings")
);
const NotificationsSettings = React.lazy(
  () => import("../pages/manage-module/settings/notificationsSettings")
);
const UserPermissionsSettings = React.lazy(
  () => import("../pages/manage-module/settings/userPermissionsSettings")
);
const PreferencesSettings = React.lazy(
  () => import("../pages/manage-module/settings/preferencesSettings")
);
const SecuritySettings = React.lazy(
  () => import("../pages/manage-module/settings/securitySettings")
);
const ManageAddInvoices = React.lazy(
  () => import("../pages/manage-module/manage-invoices/manageAddInvoices")
);
const Messages = React.lazy(
  () => import("../pages/manage-module/messages/messages")
);
const ManageInvoices = React.lazy(
  () => import("../pages/manage-module/manage-invoices/manageInvoices")
);
const ManageEditInvoices = React.lazy(
  () => import("../pages/manage-module/manage-invoices/manageEditInvoices")
);
const GeneralSettings = React.lazy(
  () => import("../pages/manage-module/settings/generalSettings")
);
const Notifications = React.lazy(
  () => import("../pages/manage-module/notifications/notifications")
);
const Staffs = React.lazy(
  () => import("../pages/manage-module/staffs/staffs")
);
const StarterPage = React.lazy(
  () => import("../pages/authentication/starter-page/starterPage")
);
const ComingSoon = React.lazy(
  () => import("../pages/authentication/coming-soon/comingSoon")
);
const UnderMaintenance = React.lazy(
  () => import("../pages/authentication/under-maintenance/underMaintenance")
);
const PrivacyPolicy = React.lazy(
  () => import("../pages/authentication/privacy-policy/privacyPolicy")
);
const TermsAndConditions = React.lazy(
  () => import("../pages/authentication/terms-and-conditions/termsAndConditions")
);
const Error404 = React.lazy(
  () => import("../pages/authentication/error-404/error404")
);
const Error500 = React.lazy(
  () => import("../pages/authentication/error-500/error500")
);
const SignUp = React.lazy(
  () => import("../pages/authentication/register/signUp")
);
const ForgotPassword = React.lazy(
  () => import("../pages/authentication/forgot-password/forgotPassword")
);
const ChangePassword = React.lazy(
  () => import("../pages/authentication/change-password/change-password")
);
const LockScreen = React.lazy(
  () => import("../pages/authentication/lock-screen/lockScreen")
);
const Appointment = React.lazy(
  () => import("../pages/appointments/appointments")
);
const AppointmentConsultation = React.lazy(
  () => import("../pages/appointments/appointmentsConsultation")
);
const Pharmacy = React.lazy(
  () => import("../pages/pharmacy/pharmacy")
);
const MedicalResults = React.lazy(
  () => import("../pages/medical-results/medicalResults")
);
const LabResults = React.lazy(
  () => import("../pages/lab-results/labResults")
);
const StartVisits = React.lazy(
  () => import("../pages/visits/startVisits")
);
const Visits = React.lazy(
  () => import("../pages/visits/visits")
);
const DoctorDetails = React.lazy(
  () => import("../pages/doctors/doctorDetails")
);
const EditDoctors = React.lazy(
  () => import("../pages/doctors/editDoctors")
);
const AddDoctors = React.lazy(
  () => import("../pages/doctors/addDoctors")
);
const AllDoctorsList = React.lazy(
  () => import("../pages/doctors/allDoctorsList")
);
const Doctors = React.lazy(
  () => import("../pages/doctors/doctors")
);
const PatientDetailsDocuments = React.lazy(
  () => import("../pages/patients/patientDetailsDocuments")
);
const PatientDetailsMedicalHistory = React.lazy(
  () => import("../pages/patients/patientDetailsMedicalHistory")
);
const PatientDetailsPrescription = React.lazy(
  () => import("../pages/patients/patientDetailsPrescription")
);
const PatientDetailsLabResults = React.lazy(
  () => import("../pages/patients/patientDetailsLabResults")
);
const PatientDetailsVisitHistory = React.lazy(
  () => import("../pages/patients/patientDetailsVisitHistory")
);
const PatientDetailsVitalSigns = React.lazy(
  () => import("../pages/patients/patientDetailsVitalSigns")
);
const PatientDetailsAppointments = React.lazy(
  () => import("../pages/patients/patientDetailsAppointments")
);
const PatientDetails = React.lazy(
  () => import("../pages/patients/patientDetails")
);
const AddPatient = React.lazy(
  () => import("../pages/patients/addPatient")
);
const EditPatient = React.lazy(
  () => import("../pages/patients/editPatient")
);
const AllPatientsList = React.lazy(
  () => import("../pages/patients/allPatientsList")
);
const SocialFeed = React.lazy(
  () => import("../pages/application/socialFeed")
);
const SearchResult = React.lazy(
  () => import("../pages/application/searchResult")
);
const FileManager = React.lazy(
  () => import("../pages/application/fileManager")
);
const KanbanView = React.lazy(
  () => import("../pages/application/kanbanView")
);
const Notes = React.lazy(
  () => import("../pages/application/notes")
);
const Todo = React.lazy(
  () => import("../pages/application/todo")
);
const InvoiceDetails = React.lazy(
  () => import("../pages/application/invoiceDetails")
);
const AddInvoice = React.lazy(
  () => import("../pages/application/addInvoice")
);
const EditInvoice = React.lazy(
  () => import("../pages/application/editInvoice")
);
const Invoice = React.lazy(
  () => import("../pages/application/invoice")
);
const ContactList = React.lazy(
  () => import("../pages/application/contactList")
);
const Contacts = React.lazy(
  () => import("../pages/application/contacts")
);
const EmailDetails = React.lazy(
  () => import("../pages/application/emailDetails")
);
const EmailCompose = React.lazy(
  () => import("../pages/application/emailCompose")
);
const Email = React.lazy(
  () => import("../pages/application/email")
);
const Calendar = React.lazy(
  () => import("../pages/application/calendar")
);
const FormBasicInputs = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-elements/formBasicInputs")
);
const FormCheckboxRadios = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-elements/formCheckboxRadios")
);
const FileUploadPage = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-elements/formFileupload")
);
const FormGridGutters = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-elements/formGridGutters")
);
const FormInputGroups = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-elements/formInputGroups")
);
const FormFloatingLabels = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-layouts/formFloatingLabels")
);
const FormHorizontal = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-layouts/formHorizontal")
);
const FormVertical = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-layouts/formVertical")
);
const FormPickers = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-pickers/formPickers")
);
const FormSelect2 = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-select2/formSelect2")
);
const FormValidation = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-validation/formValidation")
);
const FormWizard = React.lazy(
  () => import("../pages/ui-intrerface/forms/form-wizard/formWizard")
);
const FormMask = React.lazy(
  () => import("../pages/ui-intrerface/forms/input-masks/inputMasks")
);
const ChartApex = React.lazy(
  () => import("../pages/ui-intrerface/charts/apexcharts")
);
const IconBootstrap = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconBootstrap")
);
const IconFlag = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconFlag")
);
const IconFontawesome = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconFontawesome")
);
const IconIonic = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconIonic")
);
const IconMaterial = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconMaterial")
);
const IconPe7 = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconPe7")
);
const IconRemix = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconRemix")
);
const IconTabler = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconTabler")
);
const IconTypicon = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconTypicon")
);
const IconWeather = React.lazy(
  () => import("../pages/ui-intrerface/icons/iconWeather")
);
const DataTables = React.lazy(
  () => import("../pages/ui-intrerface/table/data-tables")
);
const TablesBasic = React.lazy(
  () => import("../pages/ui-intrerface/table/tables-basic")
);
const Widgets = React.lazy(
  () => import("../pages/ui-intrerface/widgets/widgets")
);
const Patients = React.lazy(
  () => import("../pages/patients/patients")
);
const Dashboard = React.lazy(
  () => import("../pages/dashboard/dashboard")
);
const VideoCall = React.lazy(
  () => import("../pages/application/videoCall")
);
const VoiceCall = React.lazy(
  () => import("../pages/application/voiceCall")
);
const Chat = React.lazy(
  () => import("../pages/application/chat")
);
const UiUtilities = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-utilities/uiUtilities")
);
const UiClipboard = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/uiClipboard")
);
const UiTooltips = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-tooltips/uiTooltips")
);
const UiNavTabs = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-nav-tabs/uiNavTabs")
);
const UiToasts = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-toasts/uiToasts")
);
const UiTypography = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-typography/uiTypography")
);
const ThemeTest = React.lazy(
  () => import("../components/theme-test/themeTest")
);
const UiSpinner = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-spinner/uiSpinner")
);
const UiScrollspy = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-scrollspy/uiScrollspy")
);
const UiProgress = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-progress/uiProgress")
);
const UiPlaceholders = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-placeholders/uiPlaceholders")
);
const UiOffcanvas = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-offcanvas/uiOffcanvas")
);
const UiPagination = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-pagination/uiPagination")
);
const UiModals = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-modals/uiModals")
);
const UiListGroup = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-list-group/uiListGroup")
);
const UiLinks = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-links/uiLinks")
);
const UiImages = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-images/uiImages")
);
const UiGrid = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-grid/uiGrid")
);
const UiRatio = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-ratio/uiRatio")
);
const UiDropdowns = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-dropdowns/uiDropdowns")
);
const UiCarousel = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-carousel/uiCarousel")
);
const UiButtonsGroup = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-buttons-group/uiButtonsGroup")
);
const UiCards = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-cards/uiCards")
);
const UiButtons = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-buttons/uiButtons")
);
const UiBreadcrumb = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-breadcrumb/uiBreadcrumb")
);
const UiBadges = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-badges/uiBadges")
);
const UiAvatar = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-avatar/uiAvatar")
);
const UiAlerts = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-alerts/uiAlerts")
);
const UiAccordion = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-accordion/uiAccordion")
);
const Login = React.lazy(
  () => import("../pages/authentication/Login/login")
);
const UiCollapse = React.lazy(
  () => import("../pages/ui-intrerface/base-ui/ui-collapse/uiCollapse")
);
const UiDragula = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/dragula/dragula")
);
const UiRangeslider = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/uiRangeslider")
);
const UiRating = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/uiRating")
);
const UiScrollbar = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/uiScrollbar")
);
const UiLightbox = React.lazy(
  () => import("../pages/ui-intrerface/ui-advance/uiLightbox")
);
const PatientSearch = React.lazy(
  () => import("../pages/patients/patientSearch")
);
const PatientDetailsInsurance = React.lazy(
  () => import("../pages/patients/patientDetailsInsurance")
);
const AddSuperbill = React.lazy(
  () => import("../pages/e-superbill/addSuperbill")
);
const ESuperbillList = React.lazy(
  () => import("../pages/e-superbill/eSuperbillList")
);
const UserList = React.lazy(
  () => import("../pages/users/userList")
);
const AddUser = React.lazy(
  () => import("../pages/users/addUser")
);
const EditUser = React.lazy(
  () => import("../pages/users/editUser")
);
const UserDetails = React.lazy(
  () => import("../pages/users/userDetails")
);
const PermissionList = React.lazy(
  () => import("../pages/settings/permissionList")
);
const AddPermission = React.lazy(
  () => import("../pages/settings/addPermission")
);
const EditPermission = React.lazy(
  () => import("../pages/settings/editPermission")
);
const MFA = React.lazy(
  () => import("../pages/authentication/mfa/mfa")
);
const ESuperbillDetails = React.lazy(
  () => import("../pages/e-superbill/eSuperbillDetails")
);
const EditSuperbill = React.lazy(
  () => import("../pages/e-superbill/editSuperbill")
);
const FacilityDetails = React.lazy(
  () => import("../pages/settings/facilityDetails")
);
const RolePermissionMatrix = React.lazy(
  () => import("../pages/settings/rolePermissionMatrix")
);

const route = all_routes;
const suspenseFallback = <div></div>;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to={route.login} />,
    route: Route,
  },
  { id: "1", path: route.uiAccordion, element: (<Suspense fallback={suspenseFallback}><UiAccordion /></Suspense>), route: Route, meta_title: "Accordion" },
  { id: "2", path: route.addPatient, element: (<Suspense fallback={suspenseFallback}><AddPatient /></Suspense>), route: Route, meta_title: "Add Patient" },
  { id: "3", path: route.uiAlerts, element: (<Suspense fallback={suspenseFallback}><UiAlerts /></Suspense>), route: Route, meta_title: "Alerts" },
  { id: "4", path: route.uiAvatar, element: (<Suspense fallback={suspenseFallback}><UiAvatar /></Suspense>), route: Route, meta_title: "Avatar" },
  { id: "5", path: route.uiBadges, element: (<Suspense fallback={suspenseFallback}><UiBadges /></Suspense>), route: Route, meta_title: "Badges" },
  { id: "6", path: route.uiBreadcrumb, element: (<Suspense fallback={suspenseFallback}><UiBreadcrumb /></Suspense>), route: Route, meta_title: "Breadcrumb" },
  { id: "7", path: route.uiButtons, element: (<Suspense fallback={suspenseFallback}><UiButtons /></Suspense>), route: Route, meta_title: "Buttons" },
  { id: "8", path: route.uiButtonsGroup, element: (<Suspense fallback={suspenseFallback}><UiButtonsGroup /></Suspense>), route: Route, meta_title: "Buttons Group" },
  { id: "9", path: route.uiCards, element: (<Suspense fallback={suspenseFallback}><UiCards /></Suspense>), route: Route, meta_title: "Cards" },
  { id: "10", path: route.uiCarousel, element: (<Suspense fallback={suspenseFallback}><UiCarousel /></Suspense>), route: Route, meta_title: "Carousel" },
  { id: "11", path: route.uiCollapse, element: (<Suspense fallback={suspenseFallback}><UiCollapse /></Suspense>), route: Route, meta_title: "Collapse" },
  { id: "12", path: route.uiDropdowns, element: (<Suspense fallback={suspenseFallback}><UiDropdowns /></Suspense>), route: Route, meta_title: "Dropdowns" },
  { id: "13", path: route.uiRatio, element: (<Suspense fallback={suspenseFallback}><UiRatio /></Suspense>), route: Route, meta_title: "Ratio" },
  { id: "14", path: route.uiGrid, element: (<Suspense fallback={suspenseFallback}><UiGrid /></Suspense>), route: Route, meta_title: "Grid" },
  { id: "15", path: route.uiImages, element: (<Suspense fallback={suspenseFallback}><UiImages /></Suspense>), route: Route, meta_title: "Images" },
  { id: "16", path: route.uiLinks, element: (<Suspense fallback={suspenseFallback}><UiLinks /></Suspense>), route: Route, meta_title: "Links" },
  { id: "17", path: route.uiListGroup, element: (<Suspense fallback={suspenseFallback}><UiListGroup /></Suspense>), route: Route, meta_title: "List Group" },
  { id: "18", path: route.uiModals, element: (<Suspense fallback={suspenseFallback}><UiModals /></Suspense>), route: Route, meta_title: "Modals" },
  { id: "19", path: route.uiOffcanvas, element: (<Suspense fallback={suspenseFallback}><UiOffcanvas /></Suspense>), route: Route, meta_title: "Offcanvas" },
  { id: "20", path: route.uiPagination, element: (<Suspense fallback={suspenseFallback}><UiPagination /></Suspense>), route: Route, meta_title: "Pagination" },
  { id: "21", path: route.uiPlaceholders, element: (<Suspense fallback={suspenseFallback}><UiPlaceholders /></Suspense>), route: Route, meta_title: "Placeholders" },
  { id: "22", path: route.manageInvoicesDetails, element: (<Suspense fallback={suspenseFallback}><ManageInvoicesDetails /></Suspense>), route: Route, meta_title: "Invoices Details" },
  { id: "23", path: route.uiProgress, element: (<Suspense fallback={suspenseFallback}><UiProgress /></Suspense>), route: Route, meta_title: "Progress" },
  { id: "25", path: route.uiScrollspy, element: (<Suspense fallback={suspenseFallback}><UiScrollspy /></Suspense>), route: Route, meta_title: "Scrollspy" },
  { id: "26", path: route.uiSpinner, element: (<Suspense fallback={suspenseFallback}><UiSpinner /></Suspense>), route: Route, meta_title: "Spinner" },
  { id: "27", path: route.uiNavTabs, element: (<Suspense fallback={suspenseFallback}><UiNavTabs /></Suspense>), route: Route, meta_title: "Nav Tabs" },
  { id: "28", path: route.uiToasts, element: (<Suspense fallback={suspenseFallback}><UiToasts /></Suspense>), route: Route, meta_title: "Toasts" },
  { id: "29", path: route.uiTypography, element: (<Suspense fallback={suspenseFallback}><UiTypography /></Suspense>), route: Route, meta_title: "Typography" },
  { id: "30", path: route.uiTooltips, element: (<Suspense fallback={suspenseFallback}><UiTooltips /></Suspense>), route: Route, meta_title: "Tooltips" },
  { id: "31", path: route.uiUtilities, element: (<Suspense fallback={suspenseFallback}><UiUtilities /></Suspense>), route: Route, meta_title: "Utilities" },
  { id: "32", path: route.uiDragula, element: (<Suspense fallback={suspenseFallback}><UiDragula /></Suspense>), route: Route, meta_title: "Dragula" },
  { id: "33", path: route.uiClipboard, element: (<Suspense fallback={suspenseFallback}><UiClipboard /></Suspense>), route: Route, meta_title: "Clipboard" },
  { id: "34", path: route.uiRangeslider, element: (<Suspense fallback={suspenseFallback}><UiRangeslider /></Suspense>), route: Route, meta_title: "Range Slider" },
  { id: "35", path: route.uiRating, element: (<Suspense fallback={suspenseFallback}><UiRating /></Suspense>), route: Route, meta_title: "Rating" },
  { id: "36", path: route.uiScrollbar, element: (<Suspense fallback={suspenseFallback}><UiScrollbar /></Suspense>), route: Route, meta_title: "Scrollbar" },
  { id: "37", path: route.uiLightbox, element: (<Suspense fallback={suspenseFallback}><UiLightbox /></Suspense>), route: Route, meta_title: "Lightbox" },
  { id: "38", path: route.chat, element: (<Suspense fallback={suspenseFallback}><Chat /></Suspense>), route: Route, meta_title: "Chat" },
  { id: "39", path: route.voiceCall, element: (<Suspense fallback={suspenseFallback}><VoiceCall /></Suspense>), route: Route, meta_title: "Voice Call" },
  { id: "40", path: route.videoCall, element: (<Suspense fallback={suspenseFallback}><VideoCall /></Suspense>), route: Route, meta_title: "Video Call" },
  { id: "41", path: route.dashboard, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "42", path: route.patients, element: (<Suspense fallback={suspenseFallback}><Patients /></Suspense>), route: Route, meta_title: "Patients" },
  { id: "43", path: route.calendar, element: (<Suspense fallback={suspenseFallback}><Calendar /></Suspense>), route: Route, meta_title: "Calendar" },
  { id: "44", path: route.email, element: (<Suspense fallback={suspenseFallback}><Email /></Suspense>), route: Route, meta_title: "Email" },
  { id: "45", path: route.emailCompose, element: (<Suspense fallback={suspenseFallback}><EmailCompose /></Suspense>), route: Route, meta_title: "Email Compose" },
  { id: "46", path: route.emailDetails, element: (<Suspense fallback={suspenseFallback}><EmailDetails /></Suspense>), route: Route, meta_title: "Email Details" },
  { id: "47", path: route.contacts, element: (<Suspense fallback={suspenseFallback}><Contacts /></Suspense>), route: Route, meta_title: "Contacts" },
  { id: "48", path: route.contactList, element: (<Suspense fallback={suspenseFallback}><ContactList /></Suspense>), route: Route, meta_title: "Contacts List" },
  { id: "49", path: route.invoice, element: (<Suspense fallback={suspenseFallback}><Invoice /></Suspense>), route: Route, meta_title: "Invoice" },
  { id: "50", path: route.addInvoice, element: (<Suspense fallback={suspenseFallback}><AddInvoice /></Suspense>), route: Route, meta_title: "Add Invoice" },
  { id: "51", path: route.editInvoice, element: (<Suspense fallback={suspenseFallback}><EditInvoice /></Suspense>), route: Route, meta_title: "Edit Invoice" },
  { id: "52", path: route.invoiceDetails, element: (<Suspense fallback={suspenseFallback}><InvoiceDetails /></Suspense>), route: Route, meta_title: "Invoice Details" },
  { id: "53", path: route.todo, element: (<Suspense fallback={suspenseFallback}><Todo /></Suspense>), route: Route, meta_title: "Todo" },
  { id: "54", path: route.notes, element: (<Suspense fallback={suspenseFallback}><Notes /></Suspense>), route: Route, meta_title: "Notes" },
  { id: "55", path: route.kanbanView, element: (<Suspense fallback={suspenseFallback}><KanbanView /></Suspense>), route: Route, meta_title: "Kanban" },
  { id: "56", path: route.fileManager, element: (<Suspense fallback={suspenseFallback}><FileManager /></Suspense>), route: Route, meta_title: "File Manager" },
  { id: "57", path: route.socialFeed, element: (<Suspense fallback={suspenseFallback}><SocialFeed /></Suspense>), route: Route, meta_title: "Social Feed" },
  { id: "58", path: route.searchResult, element: (<Suspense fallback={suspenseFallback}><SearchResult /></Suspense>), route: Route, meta_title: "Search Result" },
  { id: "59", path: route.formBasicInputs, element: (<Suspense fallback={suspenseFallback}><FormBasicInputs /></Suspense>), route: Route, meta_title: "Form Elements" },
  { id: "60", path: route.formCheckboxRadios, element: (<Suspense fallback={suspenseFallback}><FormCheckboxRadios /></Suspense>), route: Route, meta_title: "Checks & Radios" },
  { id: "61", path: route.formFileupload, element: (<Suspense fallback={suspenseFallback}><FileUploadPage /></Suspense>), route: Route, meta_title: "File Uploads" },
  { id: "62", path: route.formGridGutters, element: (<Suspense fallback={suspenseFallback}><FormGridGutters /></Suspense>), route: Route, meta_title: "Grid & Gutters" },
  { id: "63", path: route.formInputGroups, element: (<Suspense fallback={suspenseFallback}><FormInputGroups /></Suspense>), route: Route, meta_title: "Form Input Groups" },
  { id: "64", path: route.formFloatingLabels, element: (<Suspense fallback={suspenseFallback}><FormFloatingLabels /></Suspense>), route: Route, meta_title: "Floating Label" },
  { id: "65", path: route.formHorizontal, element: (<Suspense fallback={suspenseFallback}><FormHorizontal /></Suspense>), route: Route, meta_title: "Form Horizontal" },
  { id: "66", path: route.formVertical, element: (<Suspense fallback={suspenseFallback}><FormVertical /></Suspense>), route: Route, meta_title: "Form Vertical" },
  { id: "67", path: route.formPickers, element: (<Suspense fallback={suspenseFallback}><FormPickers /></Suspense>), route: Route, meta_title: "Form Picker" },
  { id: "68", path: route.formSelect, element: (<Suspense fallback={suspenseFallback}><FormSelect2 /></Suspense>), route: Route, meta_title: "Form Select" },
  { id: "69", path: route.formValidation, element: (<Suspense fallback={suspenseFallback}><FormValidation /></Suspense>), route: Route, meta_title: "Form Validation" },
  { id: "70", path: route.formWizard, element: (<Suspense fallback={suspenseFallback}><FormWizard /></Suspense>), route: Route, meta_title: "Form Wizard" },
  { id: "71", path: route.formMask, element: (<Suspense fallback={suspenseFallback}><FormMask /></Suspense>), route: Route, meta_title: "Form Mask" },
  { id: "72", path: route.chartApex, element: (<Suspense fallback={suspenseFallback}><ChartApex /></Suspense>), route: Route, meta_title: "Apex Charts" },
  { id: "73", path: route.iconBootstrap, element: (<Suspense fallback={suspenseFallback}><IconBootstrap /></Suspense>), route: Route, meta_title: "Bootstrap Icons" },
  { id: "74", path: route.iconFlag, element: (<Suspense fallback={suspenseFallback}><IconFlag /></Suspense>), route: Route, meta_title: "Flag Icons" },
  { id: "75", path: route.iconFontawesome, element: (<Suspense fallback={suspenseFallback}><IconFontawesome /></Suspense>), route: Route, meta_title: "Fontawesome Icon" },
  { id: "76", path: route.iconIonic, element: (<Suspense fallback={suspenseFallback}><IconIonic /></Suspense>), route: Route, meta_title: "Ionic Icon" },
  { id: "77", path: route.iconMaterial, element: (<Suspense fallback={suspenseFallback}><IconMaterial /></Suspense>), route: Route, meta_title: "Material Icons" },
  { id: "78", path: route.iconPe7, element: (<Suspense fallback={suspenseFallback}><IconPe7 /></Suspense>), route: Route, meta_title: "Pe7 Icon" },
  { id: "79", path: route.iconRemix, element: (<Suspense fallback={suspenseFallback}><IconRemix /></Suspense>), route: Route, meta_title: "Remix Icons" },
  { id: "80", path: route.iconTabler, element: (<Suspense fallback={suspenseFallback}><IconTabler /></Suspense>), route: Route, meta_title: "Tabler Icons" },
  { id: "81", path: route.iconTypicon, element: (<Suspense fallback={suspenseFallback}><IconTypicon /></Suspense>), route: Route, meta_title: "Typicon Icon" },
  { id: "82", path: route.iconWeather, element: (<Suspense fallback={suspenseFallback}><IconWeather /></Suspense>), route: Route, meta_title: "Weather Icon" },
  { id: "83", path: route.dataTables, element: (<Suspense fallback={suspenseFallback}><DataTables /></Suspense>), route: Route, meta_title: "Data Table" },
  { id: "84", path: route.tablesBasic, element: (<Suspense fallback={suspenseFallback}><TablesBasic /></Suspense>), route: Route, meta_title: "Table Basic" },
  { id: "85", path: route.widgets, element: (<Suspense fallback={suspenseFallback}><Widgets /></Suspense>), route: Route, meta_title: "Widgets" },
  { id: "86", path: route.allPatientsList, element: (<Suspense fallback={suspenseFallback}><AllPatientsList /></Suspense>), route: Route, meta_title: "Patients" },
  { id: "87", path: route.addPatient, element: (<Suspense fallback={suspenseFallback}><AddPatient /></Suspense>), route: Route, meta_title: "Add Patient" },
  { id: "88", path: route.editPatient, element: (<Suspense fallback={suspenseFallback}><EditPatient /></Suspense>), route: Route, meta_title: "Edit Patient" },
  { id: "89", path: route.patientDetails, element: (<Suspense fallback={suspenseFallback}><PatientDetails /></Suspense>), route: Route, meta_title: "Patient Details" },
  { id: "90", path: route.patientDetailsAppointment, element: (<Suspense fallback={suspenseFallback}><PatientDetailsAppointments /></Suspense>), route: Route, meta_title: "Patient Details Appointments" },
  { id: "91", path: route.patientDetailsVitalSign, element: (<Suspense fallback={suspenseFallback}><PatientDetailsVitalSigns /></Suspense>), route: Route, meta_title: "Patient Details Vital Signs" },
  { id: "92", path: route.patientDetailsVisitHistory, element: (<Suspense fallback={suspenseFallback}><PatientDetailsVisitHistory /></Suspense>), route: Route, meta_title: "Patient Details Visit History" },
  { id: "93", path: route.patientDetailsLabResults, element: (<Suspense fallback={suspenseFallback}><PatientDetailsLabResults /></Suspense>), route: Route, meta_title: "Patient Details Lab Results" },
  { id: "94", path: route.patientdetailsPrescription, element: (<Suspense fallback={suspenseFallback}><PatientDetailsPrescription /></Suspense>), route: Route, meta_title: "Patient Details Prescription" },
  { id: "95", path: route.patientetailsMedicalHistory, element: (<Suspense fallback={suspenseFallback}><PatientDetailsMedicalHistory /></Suspense>), route: Route, meta_title: "Patient Details Medical History" },
  { id: "96", path: route.patientetailsDocuments, element: (<Suspense fallback={suspenseFallback}><PatientDetailsDocuments /></Suspense>), route: Route, meta_title: "Patient Details Documents" },
  { id: "97", path: route.doctors, element: (<Suspense fallback={suspenseFallback}><Doctors /></Suspense>), route: Route, meta_title: "Doctors" },
  { id: "98", path: route.allDoctorsList, element: (<Suspense fallback={suspenseFallback}><AllDoctorsList /></Suspense>), route: Route, meta_title: "Doctors" },
  { id: "99", path: route.addDoctors, element: (<Suspense fallback={suspenseFallback}><AddDoctors /></Suspense>), route: Route, meta_title: "Doctors" },
  { id: "100", path: route.editDoctors, element: (<Suspense fallback={suspenseFallback}><EditDoctors /></Suspense>), route: Route, meta_title: "Doctors" },
  { id: "101", path: route.doctorDetails, element: (<Suspense fallback={suspenseFallback}><DoctorDetails /></Suspense>), route: Route, meta_title: "Doctors - Details" },
  { id: "102", path: route.visits, element: (<Suspense fallback={suspenseFallback}><Visits /></Suspense>), route: Route, meta_title: "Visits" },
  { id: "103", path: route.startVisits, element: (<Suspense fallback={suspenseFallback}><StartVisits /></Suspense>), route: Route, meta_title: "Start Visits" },
  { id: "104", path: route.labResults, element: (<Suspense fallback={suspenseFallback}><LabResults /></Suspense>), route: Route, meta_title: "Lab Results" },
  { id: "105", path: route.medicalResults, element: (<Suspense fallback={suspenseFallback}><MedicalResults /></Suspense>), route: Route, meta_title: "Medical Results" },
  { id: "106", path: route.pharmacy, element: (<Suspense fallback={suspenseFallback}><Pharmacy /></Suspense>), route: Route, meta_title: "Pharmacy" },
  { id: "107", path: route.appointments, element: (<Suspense fallback={suspenseFallback}><Appointment /></Suspense>), route: Route, meta_title: "Appointments" },
  { id: "108", path: route.staff, element: (<Suspense fallback={suspenseFallback}><Staffs /></Suspense>), route: Route, meta_title: "Staffs" },
  { id: "109", path: route.notifications, element: (<Suspense fallback={suspenseFallback}><Notifications /></Suspense>), route: Route, meta_title: "Notifications" },
  { id: "110", path: route.messages, element: (<Suspense fallback={suspenseFallback}><Messages /></Suspense>), route: Route, meta_title: "Messages" },
  { id: "111", path: route.manageInvoices, element: (<Suspense fallback={suspenseFallback}><ManageInvoices /></Suspense>), route: Route, meta_title: "Invoices" },
  { id: "112", path: route.manageAddInvoices, element: (<Suspense fallback={suspenseFallback}><ManageAddInvoices /></Suspense>), route: Route, meta_title: "Add Invoices" },
  { id: "113", path: route.manageEditInvoices, element: (<Suspense fallback={suspenseFallback}><ManageEditInvoices /></Suspense>), route: Route, meta_title: "Edit Invoices" },
  { id: "114", path: route.generalSettings, element: (<Suspense fallback={suspenseFallback}><GeneralSettings /></Suspense>), route: Route, meta_title: "General-Settings" },
  { id: "115", path: route.securitySettings, element: (<Suspense fallback={suspenseFallback}><SecuritySettings /></Suspense>), route: Route, meta_title: "Security-Settings" },
  { id: "116", path: route.preferencesSettings, element: (<Suspense fallback={suspenseFallback}><PreferencesSettings /></Suspense>), route: Route, meta_title: "Preferences-Settings" },
  { id: "117", path: route.appearanceSettings, element: (<Suspense fallback={suspenseFallback}><AppearanceSettings /></Suspense>), route: Route, meta_title: "Appearance-Settings" },
  { id: "118", path: route.notificationsSettings, element: (<Suspense fallback={suspenseFallback}><NotificationsSettings /></Suspense>), route: Route, meta_title: "Notification-Settings" },
  { id: "119", path: route.userPermissionsSettings, element: (<Suspense fallback={suspenseFallback}><UserPermissionsSettings /></Suspense>), route: Route, meta_title: "User-Permission-Settings" },
  { id: "120", path: route.permissionSettings, element: (<Suspense fallback={suspenseFallback}><PermissionSettings /></Suspense>), route: Route, meta_title: "Permission-Settings" },
  { id: "121", path: route.plansBillingsSettings, element: (<Suspense fallback={suspenseFallback}><PlansBillingsSettings /></Suspense>), route: Route, meta_title: "Plan & Billings-Settings" },
  { id: "122", path: route.appointmentConsultation, element: (<Suspense fallback={suspenseFallback}><AppointmentConsultation /></Suspense>), route: Route, meta_title: "Appointments Consultation" },
  { id: "123", path: route.starterPage, element: (<Suspense fallback={suspenseFallback}><StarterPage /></Suspense>), route: Route, meta_title: "Starter Page" },
  { id: "124", path: route.privacyPolicy, element: (<Suspense fallback={suspenseFallback}><PrivacyPolicy /></Suspense>), route: Route, meta_title: "Privacy Policy" },
  { id: "125", path: route.termsAndConditions, element: (<Suspense fallback={suspenseFallback}><TermsAndConditions /></Suspense>), route: Route, meta_title: "Terms and Conditions" },
  { id: "126", path: route.layoutMini, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "127", path: route.layoutHoverview, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "128", path: route.layoutHidden, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "129", path: route.layoutFullwidth, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "130", path: route.layoutRtl, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "131", path: route.layoutDark, element: (<Suspense fallback={suspenseFallback}><Dashboard /></Suspense>), route: Route, meta_title: "Dashboard" },
  { id: "132", path: route.requests, element: (<Suspense fallback={suspenseFallback}><Requests /></Suspense>), route: Route, meta_title: "Requests" },
  { id: "133", path: route.appointmentCalendar, element: (<Suspense fallback={suspenseFallback}><AppointmentCalendar /></Suspense>), route: Route, meta_title: "Appointments Calendar" },
  { id: "134", path: route.transactions, element: (<Suspense fallback={suspenseFallback}><Transactions /></Suspense>), route: Route, meta_title: "Transaction" },
  { id: "135", path: route.transactionsDetails, element: (<Suspense fallback={suspenseFallback}><TransactionDetails /></Suspense>), route: Route, meta_title: "Transaction Details" },
  { id: "136", path: route.patientSearch, element: (<Suspense fallback={suspenseFallback}><PatientSearch /></Suspense>), route: Route, meta_title: "Patient Search" },
  { id: "137", path: route.PatientDetailsInsurance, element: (<Suspense fallback={suspenseFallback}><PatientDetailsInsurance /></Suspense>), route: Route, meta_title: "Patient Details Insurance" },

  // ✅ Settings - Facility
  { id: "138", path: route.facilityList, element: (<Suspense fallback={suspenseFallback}><FacilityList /></Suspense>), route: Route, meta_title: "Facility" },
  { id: "139", path: route.addFacility, element: (<Suspense fallback={suspenseFallback}><AddFacility /></Suspense>), route: Route, meta_title: "Add Facility" },
  { id: "140", path: route.editFacility, element: (<Suspense fallback={suspenseFallback}><EditFacility /></Suspense>), route: Route, meta_title: "Edit Facility" },

  // ✅ Settings - Roles
  { id: "141", path: route.roleList, element: (<Suspense fallback={suspenseFallback}><RoleList /></Suspense>), route: Route, meta_title: "Roles" },
  { id: "142", path: route.addRole, element: (<Suspense fallback={suspenseFallback}><AddRole /></Suspense>), route: Route, meta_title: "Add Role" },
  { id: "143", path: route.editRole, element: (<Suspense fallback={suspenseFallback}><EditRole /></Suspense>), route: Route, meta_title: "Edit Role" },

  // Route entries
{ id: "144", path: route.permissionList, element: (<Suspense fallback={suspenseFallback}><PermissionList /></Suspense>), route: Route, meta_title: "Permissions" },
{ id: "145", path: route.addPermission, element: (<Suspense fallback={suspenseFallback}><AddPermission /></Suspense>), route: Route, meta_title: "Add Permission" },
{ id: "146", path: route.editPermission, element: (<Suspense fallback={suspenseFallback}><EditPermission /></Suspense>), route: Route, meta_title: "Edit Permission" },

  // ✅ E-Superbill
  { id: "147", path: route.addSuperbill, element: (<Suspense fallback={suspenseFallback}><AddSuperbill /></Suspense>), route: Route, meta_title: "Add eSuperbill" },

  // ✅ Users
  { id: "148", path: route.userList, element: (<Suspense fallback={suspenseFallback}><UserList /></Suspense>), route: Route, meta_title: "Users" },
  { id: "149", path: route.addUser, element: (<Suspense fallback={suspenseFallback}><AddUser /></Suspense>), route: Route, meta_title: "Add User" },
  { id: "150", path: route.editUser, element: (<Suspense fallback={suspenseFallback}><EditUser /></Suspense>), route: Route, meta_title: "Edit User" },
  { id: "151", path: route.userDetails, element: (<Suspense fallback={suspenseFallback}><UserDetails /></Suspense>), route: Route, meta_title: "User Details" },
  { id: "152", path: route.roleDetails, element: (<Suspense fallback={suspenseFallback}><RoleDetails /></Suspense>), route: Route, meta_title: "Role Details" },
  { id: "153", path: route.permissionDetails, element: (<Suspense fallback={suspenseFallback}><PermissionDetails /></Suspense>), route: Route, meta_title: "Permission Details" },
  { id: "154", path: route.eSuperbillList, element: (<Suspense fallback={suspenseFallback}><ESuperbillList /></Suspense>), route: Route, meta_title: "eSuperbills" },
  { id: "155", path: route.eSuperbillDetails, element: (<Suspense fallback={suspenseFallback}><ESuperbillDetails /></Suspense>), route: Route, meta_title: "eSuperbill Details" },
  { id: "156", path: route.editSuperbill, element: (<Suspense fallback={suspenseFallback}><EditSuperbill /></Suspense>), route: Route, meta_title: "Edit eSuperbill" },
  { id: "157", path: route.facilityDetails, element: (<Suspense fallback={suspenseFallback}><FacilityDetails /></Suspense>), route: Route, meta_title: "Facility Details" },
  { id: "159", path: route.rolePermissionMatrix, element: (<Suspense fallback={suspenseFallback}><RolePermissionMatrix /></Suspense>), route: Route, meta_title: "Permission Matrix" },
];

export const authRoutes = [
  {
    path: "/disclaimer",
    element: (<Suspense fallback={suspenseFallback}><Disclaimer /></Suspense>),
    route: Route,
  },
  { id: "1", path: route.login, element: (<Suspense fallback={suspenseFallback}><Login /></Suspense>), route: Route, meta_title: "Sign In" },
  { id: "2", path: route.signUp, element: (<Suspense fallback={suspenseFallback}><SignUp /></Suspense>), route: Route, meta_title: "Sign UP" },
  { id: "3", path: route.forgotPassword, element: (<Suspense fallback={suspenseFallback}><ForgotPassword /></Suspense>), route: Route, meta_title: "Forgot Password" },
  { id: "4", path: route.changePassword, element: (<Suspense fallback={suspenseFallback}><ChangePassword /></Suspense>), route: Route, meta_title: "Change Password" },
  { id: "5", path: route.lockScreen, element: (<Suspense fallback={suspenseFallback}><LockScreen /></Suspense>), route: Route, meta_title: "Lock Screen" },
  { id: "6", path: route.error404, element: (<Suspense fallback={suspenseFallback}><Error404 /></Suspense>), route: Route, meta_title: "Error 404" },
  { id: "7", path: route.error500, element: (<Suspense fallback={suspenseFallback}><Error500 /></Suspense>), route: Route, meta_title: "Error 500" },
  { id: "8", path: route.comingSoon, element: (<Suspense fallback={suspenseFallback}><ComingSoon /></Suspense>), route: Route, meta_title: "Coming Soon" },
  { id: "9", path: route.underMaintenance, element: (<Suspense fallback={suspenseFallback}><UnderMaintenance /></Suspense>), route: Route, meta_title: "Under Maintenance" },
  { id: "10", path: route.themeTest, element: (<Suspense fallback={suspenseFallback}><ThemeTest /></Suspense>), route: Route, meta_title: "Theme Test" },
  { id: "11", path: route.mfa, element: (<Suspense fallback={suspenseFallback}><MFA /></Suspense>), route: Route, meta_title: "MFA Verification" },
];