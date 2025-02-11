import "./Schedule.css";
import Timeline from "./Timeline";

export default function SchedulePage() {
  const events = [
    "Event 1: Start",
    "Event 2: Design",
    "Event 3: Development",
    "Event 4: Testing",
    "Event 5: Launch",
  ];

  return (
    <div className="scheduleMain">
      <h1 style={{ textAlign: "center", fontSize: "34px" }}>
        Timeline example
      </h1>
      <Timeline events={events} />
    </div>
  );
}
