import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import FullCalendar from "@fullcalendar/react";
import type { EventMountArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import AppointmentCalendarModal from "./modal/appointmentCalendarModal";

interface EventImage {
  url: string;
  data: string;
}

interface CalendarEvent {
  title: string;
  start: string;
  backgroundColor: string;
  images: EventImage[];
}

const AppointmentCalendar = () => {
  const appointmentModalRef = useRef<any>(null);
  const modalElementRef = useRef<HTMLDivElement>(null);

  // Initialize Bootstrap Modal
  useEffect(() => {
    if (modalElementRef.current && window.bootstrap) {
      appointmentModalRef.current = new window.bootstrap.Modal(modalElementRef.current);
    }

    return () => {
      if (appointmentModalRef.current) {
        appointmentModalRef.current.dispose();
      }
    };
  }, []);

  // EVENT DATA (matching original HTML script)
  const events: CalendarEvent[] = [
    {
      title: "",
      images: [
        { url: "/src/assets/img/avatars/avatar-01.jpg", data: "James Carter - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-02.jpg", data: "Sophia Wilson - 10:30 AM to 11:30 AM" },
      ],
      backgroundColor: "rgba(0, 0, 0, .2)",
      start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
    },
    {
      title: "",
      images: [
        { url: "/src/assets/img/avatars/avatar-03.jpg", data: "Thomas - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-04.jpg", data: "Shaver - 10:30 AM to 11:30 AM" },
        { url: "/src/assets/img/avatars/avatar-05.jpg", data: "Ann - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-06.jpg", data: "Claffin - 11:00 AM to 12:00 PM" },
        { url: "/src/assets/img/avatars/avatar-07.jpg", data: "Enrique - 12:30 PM to 01:30 PM" },
      ],
      backgroundColor: "rgba(0, 0, 0, .2)",
      start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
    },
    {
      title: "",
      images: [
        { url: "/src/assets/img/avatars/avatar-08.jpg", data: "David Smith - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-09.jpg", data: "Deacon - 10:30 AM to 11:30 AM" },
        { url: "/src/assets/img/avatars/avatar-10.jpg", data: "Stone - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-11.jpg", data: "Evans - 11:00 AM to 12:00 PM" },
      ],
      backgroundColor: "rgba(0, 0, 0, .2)",
      start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
    },
    {
      title: "",
      images: [
        { url: "/src/assets/img/avatars/avatar-12.jpg", data: "Olivia Miller - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-13.jpg", data: "Deacon - 10:30 AM to 11:30 AM" },
        { url: "/src/assets/img/avatars/avatar-14.jpg", data: "Stone - 10:00 AM to 11:00 AM" },
        { url: "/src/assets/img/avatars/avatar-15.jpg", data: "Evans - 11:00 AM to 12:00 PM" },
      ],
      backgroundColor: "rgba(0, 0, 0, .2)",
      start: new Date(Date.now() + 68000000).toISOString().slice(0, 10),
    },
  ];

  // ------------------------------------------
  // ⭐ Event Did Mount Handler (matching original HTML script)
  // ------------------------------------------
  const handleEventDidMount = (info: EventMountArg) => {
    const eventEl = info.el;
    const images = (info.event.extendedProps.images as EventImage[]) || [];

    // Background color on day cell
    const tdEl = eventEl.closest("td");
    if (tdEl) {
      (tdEl as HTMLElement).style.backgroundColor = info.event.backgroundColor;
    }

    // Prepare image avatars (first 2 visible)
    const avatarImages = images
      .slice(0, 2)
      .map(
        (img) => `
        <img class="fc-event-image avatar avatar-sm rounded-circle calendar-img"
          src="${img.url}" alt="" title="${img.data}" data-bs-toggle="tooltip" data-bs-placement="top">
      `
      )
      .join("");

    const moreImages = images.slice(2);
    const moreImagesHtml = moreImages
      .map(
        (img) => `
        <div class="d-flex align-items-center avatar avatar-sm rounded-circle cal-img">
          <img class="fc-event-image calendar-img" src="${img.url}" alt="${img.data}"
            title="${img.data}" data-bs-toggle="tooltip" style="display:none;">
        </div>
      `
      )
      .join("");

    // Build 'Show more' popover content
    let popover: any = null;

    if (moreImages.length > 0) {

      const popoverContent = `
        <div class="calendar-popover">
          <div class="calendar-popover-header d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <h5 class="mb-0">${info.event.start?.toLocaleDateString(undefined, {
              weekday: "long",
              day: "numeric",
            } as Intl.DateTimeFormatOptions)}</h5>
            <button type="button" class="btn-close popover-close" aria-label="Close"></button>
          </div>
          <div class="calendar-popover-body">
            ${images
              .map((image) => {
                const [name, time] = image.data.split("-");
                return `
                <div class="calendar-popover-item d-flex align-items-center justify-content-between border rounded p-2 mb-2 gap-2" data-bs-toggle="modal" data-bs-target="#appointment_details">
                  <div class="d-flex align-items-center gap-2">
                    <div class="flex-shrink-0 position-relative pe-1">
                      <img src="${image.url}" class="rounded avatar avatar-sm me-2">
                      <span class="avatar-xxs fs-10 rounded-circle bg-dark text-white position-absolute end-0 bottom-0 d-flex align-items-center justify-content-center">
                        <i class="ti ti-video"></i>
                      </span>
                    </div>
                    <span class="fw-medium text-dark">${name.trim()}</span>
                  </div>
                  <div class="text-muted fw-medium text-dark small">${time?.trim() || ""}</div>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>
      `;

      if (window.bootstrap) {
        popover = new window.bootstrap.Popover(eventEl, {
          html: true,
          trigger: "click",
          sanitize: false,
          content: popoverContent,
          placement: "auto",
          container: "body",
        });

        eventEl.addEventListener("shown.bs.popover", function () {
          const popoverId = eventEl.getAttribute("aria-describedby");
          const popoverEl = document.getElementById(popoverId || "");
          if (popoverEl && popover) {
            const closeBtn = popoverEl.querySelector(".popover-close");
            if (closeBtn) {
              closeBtn.addEventListener("click", function () {
                popover?.hide();
              });
            }

            // Add MODAL TRIGGER listener
            popoverEl.querySelectorAll('[data-bs-target="#appointment_details"]').forEach((el) => {
              el.addEventListener("click", function (e) {
                e.stopPropagation(); // prevents popover closing before modal opens
                appointmentModalRef.current?.show();
              });
            });
          }
        });
      }
    }

    // Inject avatars and optional "Show more"
    const imageWrapper = document.createElement("div");
    imageWrapper.innerHTML = avatarImages + moreImagesHtml ;
    const titleContainer = eventEl.querySelector(".fc-event-title-container");
    if (titleContainer) {
      titleContainer.appendChild(imageWrapper);

      // Add click handler for "Show more" link to trigger popover
      if (moreImages.length > 0 && popover) {
        const showMoreLinkEl = titleContainer.querySelector(".show-more");
        if (showMoreLinkEl) {
          showMoreLinkEl.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            popover?.toggle();
          });
        }
      }
    }

    // Tooltip initialization for current event only
    if (window.bootstrap) {
      const tooltipElements = eventEl.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipElements.forEach((el: Element) => {
        new window.bootstrap.Tooltip(el);
      });
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* HEADER */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Calendar</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={all_routes.appointments}>Appointments</Link>
                  </li>
                  <li className="breadcrumb-item active">Calendar</li>
                </ol>
              </div>
            </div>

            <div>
              <div className="input-icon input-icon-start position-relative">
                <span className="input-icon-addon">
                  <i className="ti ti-search" />
                </span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
          </div>

          {/* CALENDAR */}
          <div className="card mb-0 appointment-calendar-card">
            <div className="card-body">
              <div id="calendar-appointment">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    start: "prev,next today",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  events={events}
                  eventDidMount={handleEventDidMount}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer text-center">
          <p className="mb-0 text-dark">
            2025 © <Link to="#" className="link-primary">Dreams EMR</Link> - All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* MODAL */}
      <AppointmentCalendarModal ref={modalElementRef} />
    </>
  );
};

export default AppointmentCalendar;
