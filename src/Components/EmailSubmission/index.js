import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Checkbox, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function EmailSubmisson(props) {
  const [sent, setSent] = useState(false);

  /**
   * @description Sends an Email with messageContent
   * @param {Object} messsageContent - the contents of the message
   * name:string,
   * phone_number:string,
   * message:string
   */
  function sendEmail(msgContent) {
    const serviceID = "service_8l2818s";
    const templateID = "template_3j3zhdf";
    const publicKey = "xuAoJDnqyMtq06AB7";
    emailjs
      .send(serviceID, templateID, msgContent, publicKey)
      .then((response) => {
        setSent(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const phoneRegExp = RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  );
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);

  const validation = Yup.object().shape({
    name: Yup.string().min(1, "name?").max(255).required("Name required"),
    is_member: Yup.boolean(),
    email: Yup.string()
      .matches(emailRegex, "invalid Email")
      .required("Email required"),
    phone_number: Yup.string().matches(
      phoneRegExp,
      "Phone number is not valid"
    ),
    message: Yup.string().min(10).max(1000).required("Message required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      is_member: false,
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      sendEmail(values);
    },
  });

  return (
    <>
      {!sent && (
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "2rem",
                justifyContent: "flex-start",
              }}
            >
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                name="name"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
              />
              <TextField
                error={Boolean(
                  formik.touched.phone_number && formik.errors.phone_number
                )}
                helperText={
                  formik.touched.phone_number && formik.errors.phone_number
                }
                label="Phone Number"
                name="phone_number"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.phone_number}
                type="text"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                color: "#91009e",
              }}
            >
              <Checkbox
                name="is_member"
                onChange={formik.handleChange}
                value={formik.values.is_member}
                sx={{ paddingLeft: 0 }}
              />
              I am a member of NYU FCU
            </div>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              name="email"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              sx={{ maxWidth: "20rem" }}
            />
            <TextField
              error={Boolean(formik.touched.message && formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              minRows={3}
              maxRows={10}
              label="Message"
              name="message"
              variant="standard"
              multiline
              onChange={formik.handleChange}
              value={formik.values.message}
              type="text"
              sx={{ backgroundColor: "#eee" }}
            />
            <Button
              type="submit"
              sx={{
                fontSize: "1.75rem",
                color: "#91009e",
                border: "2px solid",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
      {sent && <div style={{ fontSize: "4rem" }}>Message sent!</div>}
    </>
  );
}
