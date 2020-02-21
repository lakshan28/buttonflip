import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: "4rem",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: "0.9rem",
    padding: "0.5rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: "4rem",
      outline: "none"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  selectlabel:{
    color:"#fff",
    "&:focus": {
     
      color:"#000",
    },
    "&:active" :{
      color:"#000",
    }
  }

  
}));

export default function CommonSelection(props) {
  const {
    label,
    value,
    onChange,
    
    arrata2:arrata1,
    
  } = props;
  const classes = useStyles();
  
  return (
    <div>
      <FormControl id="1" className={classes.margin}>
        <InputLabel className={classes.selectlabel} htmlFor="1">{arrata1}</InputLabel>
        <NativeSelect
          id="1"
          value={value}
          onChange={onChange}
          input={<BootstrapInput />}
          className={classes.tettt}
        >
          {
          arrata1.map(arrr => (
<option value={arrr}>{arrr}</option>
            ))
          }
          
         
        </NativeSelect>
      </FormControl>
    </div>
  );
}
