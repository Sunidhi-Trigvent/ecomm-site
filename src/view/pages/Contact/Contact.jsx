import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MuiTextField from "../../../components/TextFieldMui";
import FormContainer from "../../../components/FormContainer";

function Contact() {
  return (
    <>
      <Box sx={{ mt: 16 }}>
        <Typography
          sx={{
            fontSize: "1.5rem", // Increase font size
            fontWeight: "bold", // Make font bold
            textAlign: "center", // Center the text
          }}
        >
          Contact Page
        </Typography>

        <Box sx={{ mt: 3 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.728216167285!2d77.22901212457454!3d30.13224035341607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730955417333!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>

      {/* Form start- */}
      <Stack
        direction="column"
        alignItems="flex-end" // Aligns content to the right within the Stack
        spacing={2} // Adds space between items
        sx={{ width: "100%", maxWidth: "400px", ml: "auto", mr: 46, mt: 4 }} // Ensures Stack is aligned to the right and limited in width
      >
        <FormContainer sx={{ spacing: 2 }}>
          <MuiTextField name="text" label="Your Name" fullWidth />

          <MuiTextField name="email" label="Your Email" fullWidth />
        </FormContainer>
      </Stack>
    </>
  );
}

export default Contact;
