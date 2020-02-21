import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));
const w = window.innerWidth;
const h = window.innerHeight;

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [oooo, setOooo] = React.useState(true);
  console.log(oooo);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  console.log(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (w > 1366) {
      setOooo(true);
    } else {
      setOooo(false);
    }
  });

  console.log(oooo);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <Button>loka</Button>
      </div>

      <Button
        aria-describedby={id}
        style={{ left: "50%", marginTop: "10%" }}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Popover
      </Button>
      <button onClick={() => setOooo(!oooo)}>Button</button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: oooo ? 250 : 500, left: oooo ? 550 : 400 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transitionDuration={500}
        children={<h1>fghfghfhhfh</h1>}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </div>
  );
}
