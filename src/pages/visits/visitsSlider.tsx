import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from "../../components/image-with-base-path";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";

interface Visit {
  patientImg: string;
  patientName: string;
  lastVisit: string;
  doctorImg: string;
  doctorName: string;
  treatment: string;
  icon: string;
  dept: string;
}

const TodayVisits: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const visits: Visit[] = [
    {
      patientImg: "assets/img/avatars/avatar-03.jpg",
      patientName: "James Carter",
      lastVisit: "20 Feb 2025",
      doctorImg: "assets/img/doctors/doctor-02.jpg",
      doctorName: "Dr. Andrew Clark",
      treatment: "Electromyography",
      icon: "ti ti-brain",
      dept: "Neurology",
    },
    {
      patientImg: "assets/img/avatars/avatar-04.jpg",
      patientName: "Olivia Miller",
      lastVisit: "12 Mar 2025",
      doctorImg: "assets/img/doctors/doctor-03.jpg",
      doctorName: "Dr. Laura Mitchell",
      treatment: "Angiography",
      icon: "ti ti-heart-check",
      dept: "Cardiology",
    },
    {
      patientImg: "assets/img/avatars/avatar-25.jpg",
      patientName: "William Brown",
      lastVisit: "25 Apr 2025",
      doctorImg: "assets/img/doctors/doctor-06.jpg",
      doctorName: "Dr. Andrew Clark",
      treatment: "Fever Management",
      icon: "ti ti-stethoscope",
      dept: "General Medicine",
    },
    {
      patientImg: "assets/img/avatars/avatar-06.jpg",
      patientName: "Thomas Joe",
      lastVisit: "34 Apr 2025",
      doctorImg: "assets/img/doctors/doctor-07.jpg",
      doctorName: "Dr. Sara Clark",
      treatment: "Surgery",
      icon: "ti ti-stethoscope",
      dept: "Opthamology",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // we use custom arrows
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="card visit-slider">
      {/* Card Header */}
      <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
        <h5 className="mb-0">Today Visits</h5>
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="slick-arrow visit-prev"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i className="ti ti-chevron-left"></i>
          </button>
          <button
            type="button"
            className="slick-arrow visit-next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i className="ti ti-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="card-body">
        <Slider ref={sliderRef} {...settings}>
          {visits.map((v, idx) => (
            <div key={idx} className="px-2">
              <div className="card mb-0">
                <div className="card-body">

                  {/* Patient Info */}
                  <div className="d-flex align-items-center justify-content-between mb-3 bg-light rounded p-3">
                    <span className="avatar avatar-md flex-shrink-0 border me-2">
                      <Link to={all_routes.patientDetails}>
                        <ImageWithBasePath src={v.patientImg} className="img-fluid" alt="patient" />
                      </Link>
                    </span>
                    <div className="flex-fill">
                      <h6 className="fw-medium mb-1">
                        <Link to={all_routes.patientDetails}>{v.patientName}</Link>
                      </h6>
                      <p className="mb-0">Last Visit : {v.lastVisit}</p>
                    </div>
                  </div>

                  {/* Doctor & Treatment */}
                  <div className="d-flex align-items-sm-center justify-content-between gap-2 mb-3 pb-3 border-bottom flex-column flex-sm-row">
                    <div>
                      <h6 className="fs-14 fw-semibold mb-1">Doctor</h6>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm me-2">
                          <Link to={all_routes.doctorDetails}>
                            <ImageWithBasePath src={v.doctorImg} alt="doctor" />
                          </Link>
                        </span>
                        <div>
                          <p className="link-dark mb-0">
                            <Link to={all_routes.doctorDetails}>{v.doctorName}</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="fs-14 fw-semibold mb-1">Treatment</h6>
                      <p className="mb-0">{v.treatment}</p>
                    </div>
                  </div>

                  {/* Department & Start Visit */}
                  <div className="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-light text-dark me-2">
                        <i className={`${v.icon} fs-16`}></i>
                      </span>
                      <h6 className="fw-medium mb-0">{v.dept}</h6>
                    </div>
                    <Link to={all_routes.startVisits} className="fw-medium text-decoration-underline">
                      Start Visit
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TodayVisits;
