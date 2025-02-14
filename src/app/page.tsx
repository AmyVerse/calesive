import MyCalendar from "./components/calendar";

export default function CalendarPage() {
  return (
    <div className="bg-black rounded-lg shadow-md p-6 sm:w-full sm:h-[70vh] overflow-hidden">
      <MyCalendar />
    </div>
  );
}
