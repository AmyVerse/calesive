"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function MyCalendar() {

  return (
    <div className="p-4 dark:bg-[#070b1a] bg-white rounded-lg shadow-md">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable
        selectable
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        events={[
          { title: "Kshitij", start: "2025-02-01", color: "#ff6e00" },
          { title: "Kshitij", start: "2025-02-02", color: "#ff6e00" },
          { title: "Prize Distribution Ceremony - Kshitij", start: "2025-02-14", color: "#ff6e00"},
          { title: "Demo Days", start: "2025-02-15", url: "https://unstop.com/p/iiitn-demo-days-2-crispr-iiitn-1396408" },
          { title: "Abhivyakti", start: "2025-02-27", color: "#ff0000", url: "https://www.abhivyaktifest.in/" },
          { title: "Abhivyakti", start: "2025-02-28", color: "#ff0000", url: "https://www.abhivyaktifest.in/" },
          { title: "7th Inter-IIIT Students Sports Meet 2025", start: "2025-03-20" },
          { title: "7th Inter-IIIT Students Sports Meet 2025", start: "2025-03-22" },
          { title: "7th Inter-IIIT Students Sports Meet 2025", start: "2025-03-23" },
          { title: "7th Inter-IIIT Students Sports Meet 2025", start: "2025-03-21" },
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
}
