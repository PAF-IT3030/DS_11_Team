import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
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

const MealPlanEditFrom = ({ editPlan, onDoneEdit }) => {
  const [mealPlan, setMealPlan] = useState({
    id: editPlan.id,
    instructions: editPlan.instructions,
    recipeName: editPlan.recipeName,
    userId: 1,
  });
  const [error, setError] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMealPlan((plan) => ({
      ...plan,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      mealPlan.recipeName.trim() === "" ||
      mealPlan.instructions.trim() === ""
    ) {
      setError("Please fill out all fields ");
      return;
    }

    setError("");

    // Prepare the data to be sent to the backend
    const updatedMealPlan = {
      id: editPlan.id,
      recipeName: mealPlan.recipeName,
      instructions: mealPlan.instructions,
      userId: 1, // Add the userId field here
      // Add any other necessary fields here
    };

    // Submit data
    axios
      .put("http://localhost:9191/api/meal-plan/edit", updatedMealPlan)
      .then((response) => {
        console.log(response.status, response.data.token);
        onDoneEdit(true);
      })
      .catch((error) => {
        console.error("Error updating meal plan:", error);
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
                // color: "rgb(59 130 246)",
                textAlign: "center",
              }}
            >
              EDIT YOUR MEAL PLAN
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Recipe Name"
                    fullWidth
                    name="recipeName"
                    value={mealPlan.recipeName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Instructions"
                    fullWidth
                    multiline
                    rows={4}
                    name="instructions"
                    value={mealPlan.instructions}
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
                Your meal plan has been successfully created!
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

export default MealPlanEditFrom;
