import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
  root: {
    height: 500,
    transform: "translateZ(0px)",
    flexGrow: 1
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" }
];

export default function SpeedDiall() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
      <Button onClick={handleOpen}>test</Button>
      <Backdrop open={open} />
      <ClickAwayListener onClickAway={handleClose}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={
            open ? (
              <SaveIcon
                style={{ boxShadow: "57px 137px 127px 0px rgba(150,27,150,1)" }}
              />
            ) : (
              <PrintIcon
                style={{ boxShadow: "57px 137px 127px 0px rgba(150,27,150,1)" }}
              />
            )
          }
          onClick={handleOpen}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => console.log(55555555)}
            />
          ))}
        </SpeedDial>
      </ClickAwayListener>
    </div>
  );
}
