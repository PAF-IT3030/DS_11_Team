import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const WorkoutPlanEditForm = ({ editPlan, onDoneEdit }) => {
  const [workoutPlan, setWorkoutPlan] = useState({
    id: editPlan.id,
    title: editPlan.title,
    steps: editPlan.steps,
    userId: 1, // Assuming you need to update the userId
    // Add any other necessary fields here
  });
  const [error, setError] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

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
    if (
      workoutPlan.title.trim() === "" ||
      workoutPlan.steps.trim() === ""
    ) {
      setError("Please fill out all fields ");
      return;
    }

    setError("");

    // Prepare the data to be sent to the backend
    const updatedWorkoutPlan = {
      id: editPlan.id,
      title: workoutPlan.title,
      steps: workoutPlan.steps,
      userId: 1, // Add the userId field here
      // Add any other necessary fields here
    };

    // Submit data
    axios
      .put("http://localhost:9191/api/workout-plan/edit", updatedWorkoutPlan)
      .then((response) => {
        console.log(response.status, response.data.token);
        onDoneEdit(true);
      })
      .catch((error) => {
        console.error("Error updating workout plan:", error);
      });
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <div className="bg-white">
          <Box boxShadow={3} p={3} borderRadius={8} mb={3} mt={5} mr={4}>
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "font-mono",
                textAlign: "center",
              }}
            >
              EDIT YOUR WORKOUT PLAN
            </Typography>
            <form onSubmit={handleSubmit}>
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
                    EDIT
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
            <DialogTitle>Success</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Your workout plan has been successfully updated!
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSuccessDialog} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkoutPlanEditForm;
