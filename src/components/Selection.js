import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  test: {
    color: "#D7BDE2",
    backgroundColor: "#009900 ",
    fontSize: "0.9rem",
    padding: "0.5rem"
  },
  tettt: {},
  kkkk: {
    backgroundColor: "#663366"
  }
}));

export default function Selection() {
  const classes = useStyles();
  const [age1, setAge1] = React.useState("");
  const handleChange1 = event => {
    setAge1(event.target.value);
  };

  const [age2, setAge2] = React.useState("");
  const handleChange2 = event => {
    setAge2(event.target.value);
  };

  const [total, setTotal] = React.useState(0);

  const addNumber = () => {
    setTotal(parseInt(age1) + parseInt(age1));
  };

  const [array1, setArray] = React.useState([1, 2, 3, 4]);

  const pushnumber = () => {
    array1.push(25);
  };
  console.log(array1);
  const lokaa = {
    id1: age1,
    id2: age2
  };
  console.log("5555" + lokaa.id1);
  console.log(lokaa);
  return (
    <div>
      <FormControl id="1" className={classes.margin}>
        <InputLabel htmlFor="1">Age1</InputLabel>
        <NativeSelect
          id="1"
          value={age1}
          onChange={handleChange1}
          input={<BootstrapInput />}
          className={classes.tettt}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={40}>Forty</option>
          <option value={50}>Fifty</option>
        </NativeSelect>
      </FormControl>
      <FormControl id="2" className={classes.margin}>
        <InputLabel htmlFor="1">Age2</InputLabel>
        <NativeSelect
          id="2"
          value={age2}
          onChange={handleChange2}
          input={<BootstrapInput />}
          className={classes.tettt}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={40}>Forty</option>
          <option value={50}>Fifty</option>
        </NativeSelect>
      </FormControl>
      <h1>{total}</h1>
      <br />
      {array1.map(arrayy => (
        <p key={arrayy}>{arrayy}</p>
      ))}
      <button onClick={addNumber}>add</button>
      <button onClick={pushnumber}>push</button>
    </div>
  );
}
