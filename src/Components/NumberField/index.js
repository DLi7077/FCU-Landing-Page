import { Slider, TextField } from "@mui/material";

const classes = {
  input: {
    display: "flex",
    columnGap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  slider: {
    width: "250px",
  },
};
/**
 * @description Generates a numberfield
 * @params value -> some state variable
 * @params setValue -> some state function
 * @params min -> min value
 * @params max -> max value
 * @params step
 */
export default function NumberField(props) {
  return (
    <div style={classes.input}>
      <TextField
        value={props.value ?? 0}
        size="small"
        variant="standard"
        label={props.label}
        inputProps={{ style: { fontSize: "1.5rem" } }}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        min={props.min ?? undefined}
        max={props.max ?? undefined}
        step={props.step ?? undefined}
        onChange={(e) => {
          const value = !!e.target.value ? e.target.value : 0;
          props.setValue(parseFloat(value));
        }}
        type={props.type}
      />
      <Slider
        style={classes.slider}
        min={props.min ?? undefined}
        max={props.max ?? undefined}
        step={props.step ?? undefined}
        valueLabelDisplay="auto"
        value={props.value ?? 0}
        onChange={(e) => {
          const value = e.target.value ?? 0;
          props.setValue(parseFloat(value));
        }}
      />
    </div>
  );
}
