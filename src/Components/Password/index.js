import { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * @description Genereates a password bar
 * on correct submission, performs a function
 * @param {any} props : contains {password: string, function: any}
 * @returns
 */
export default function Password(props) {
  const [password, setPassword] = useState("");
  const [attempt, setAttempt] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === props.password) {
      props.allow();
      return;
    } else {
      setAttempt(true);
    }
  };

  const icon_style = { fontSize: "2rem" };

  const passwordEye = (
    <IconButton
      color="default"
      onClick={() => {
        setShow(!show);
      }}
    >
      {show ? (
        <Visibility style={icon_style} />
      ) : (
        <VisibilityOff style={icon_style} />
      )}
    </IconButton>
  );

  const submitButton = (
    <IconButton onClick={handleSubmit}>
      <ArrowForwardIcon sx={icon_style} color="primary" />
    </IconButton>
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={attempt}
        helperText={attempt ? "Incorrect Password" : ""}
        color="primary"
        label="Password"
        type={show ? "text" : "password"}
        autoComplete={"new-password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (attempt) {
            setAttempt(false);
          }
        }}
        InputProps={{
          startAdornment: passwordEye,
          endAdornment: submitButton,
        }}
        inputProps={{
          style: { fontSize: "2rem", paddingLeft: "0.5rem" },
        }}
        FormHelperTextProps={{
          style: { fontSize: "1rem" },
        }}
        InputLabelProps={{
          style: { fontSize: "2rem" },
        }}
      />
    </form>
  );
}
