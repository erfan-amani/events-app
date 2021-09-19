import { Link } from "@material-ui/core";
import EventsList from "../components/events/events-list";
import { getAllEvents } from "../events-data";

export default function HomePage() {
  const events = getAllEvents();

  return <EventsList events={events} />;
}
