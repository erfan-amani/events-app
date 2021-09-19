import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Event from "./event";

const useStyle = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function EventsList({ events }) {
  const classes = useStyle();

  const renderedList = events.map((e) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={e.id}>
        <Event {...e} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {renderedList}
    </Grid>
  );
}
