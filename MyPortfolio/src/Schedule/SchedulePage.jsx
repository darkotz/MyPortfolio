import "./Schedule.css";
import Timeline from "./Timeline";




export default function SchedulePage() {

  const events = [
    'Event 1: Start',
    'Event 2: Design',
    'Event 3: Development',
    'Event 4: Testing',
    'Event 5: Launch'
  ];


  return (
    <>
      <h1>Interactive Timeline</h1>
      <Timeline events={events} />
    </>
  );
}
