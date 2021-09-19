import { AppBar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <AppBar position="static">
      <IconButton edge="start">
        <MenuIcon />
      </IconButton>
    </AppBar>
  );
}

export default Navbar;
