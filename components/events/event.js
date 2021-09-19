import Link from "next/link";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const event = () => {
  return (
    <Card variant="outlined">
      <CardMedia
        title={e.title}
        image={`/${e.image}`}
        className={classes.media}
      />
      <CardContent>
        <Typography component="p">{e.title}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/events/${e.id}`}>
          <a>More detail</a>
        </Link>
      </CardActions>
    </Card>
  );
};

export default event;
