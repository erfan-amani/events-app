import { Container } from "@material-ui/core";
import EventsList from "../../components/events/events-list";
import { getAllEvents } from "../../events-data";

function AllEventPage() {
  const events = getAllEvents();

  return (
    <Container maxWidth="md">
      <EventsList events={events} />
    </Container>
  );
}

export default AllEventPage;
