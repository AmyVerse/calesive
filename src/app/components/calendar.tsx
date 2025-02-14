"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function MyCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      events={[
        { title: "Event 1", start: "2025-02-20" },
        { title: "Event 2", start: "2025-02-22" },
      ]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      eventClick={(info) => {
        alert(`Event: ${info.event.title}`);
      }}
      dateClick={(info) => {
        alert(`Clicked on: ${info.dateStr}`);
      }}
    />
  );
}
