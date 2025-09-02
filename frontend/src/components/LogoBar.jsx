// src/components/LogoBar.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import sasi from '../../img/sasi.png'

export default function LogoBar() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        borderBottom: "2px solid #ccc",
      }}
    >
      <img src={sasi} alt="Sasi Logo" style={{ height: "60px", marginRight: "15px" }} />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Sasi Institute of Technology & Engineering
      </Typography>
    </Box>
  );
}