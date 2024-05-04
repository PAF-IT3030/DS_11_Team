import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const WorkoutPlanForm = () => {
  const [workoutPlan, setWorkoutPlan] = useState({
    title: "",
    steps: "",
    userId : 1,
  });

  const [error, setError] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setWorkoutPlan((plan) => ({
      ...plan,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (workoutPlan.title.trim() === "" || workoutPlan.steps.trim() === "") {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    // Submit data
    axios
      .post("http://localhost:9191/api/workout-plan/create", workoutPlan)
      .then((response) => {
        console.log(response.status, response.data.token);
        setOpenSuccessDialog(true); // Open success dialog when successfully created
      })
      .catch((error) => {
        console.error("Error creating workout plan:", error);
      });
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    navigate("/workoutplanspost");
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box boxShadow={3} p={3} borderRadius={8} mb={4} mt={3}>
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "font-mono",
                color: "rgb(59 130 246)",
                textAlign: "center",
              }}
            >
              CREATE YOUR WORKOUT PLAN
            </Typography>
            <form onSubmit={handleSubmit} className="bg-white">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    fullWidth
                    name="title"
                    value={workoutPlan.title}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Steps"
                    fullWidth
                    multiline
                    rows={4}
                    name="steps"
                    value={workoutPlan.steps}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} align="center">
                  {error && (
                    <Typography style={{ color: "red" }}>{error}</Typography>
                  )}
                  <Button type="submit" variant="contained" color="primary">
                    CREATE
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your workout plan has been successfully created!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WorkoutPlanForm;
