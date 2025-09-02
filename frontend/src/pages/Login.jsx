import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoBar from "../components/LogoBar";   // import header

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      navigate("/result");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <Box>
      {/* Header with logo */}
      <LogoBar />

      {/* Login box */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Paper elevation={3} sx={{ padding: 4, width: 350, border: "1px solid #ddd" }}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Login
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value)}
              sx={{ width: 200, margin: "auto" }}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}



