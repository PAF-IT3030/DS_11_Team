import React, { useState } from "react";
import {
  TextField,
  Button,
  Container, 
  Grid,
  Box, 
  Typography, 
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const MealPlanFrom = () => {
  const [mealPlan, setMealPlan] = useState({
    dietary: "vegan",
    instructions: "",
    recipeName: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    portionSize: 0,
    userId: 1,
    ingredients: [],
    images: [],
  });

  const [newIngredient, setNewIngredient] = useState("");
  const [error, setError] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMealPlan((plan) => ({
      ...plan,
      [name]: value,
    }));
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setMealPlan((plan) => ({
        ...plan,
        ingredients: [...plan.ingredients, newIngredient],
      }));
      setNewIngredient("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      mealPlan.recipeName.trim() === "" ||
      mealPlan.instructions.trim() === ""
    ) {
      setError("Please fill out all fields .");
      return;
    }

    setError("");

    // Submit data
    axios
      .post("http://localhost:9191/api/meal-plan/create", mealPlan)
      .then((response) => {
        console.log(response.status, response.data.token);
        setOpenSuccessDialog(true); // Open success dialog when successfully created
      })
      .catch((error) => {
        console.error("Error creating meal plan:", error);
      });
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    navigate("/mealplanspost");
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
              CREATE YOUR MEAL PLAN
            </Typography>
            <form onSubmit={handleSubmit} className="bg-white">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Meal Name"
                    fullWidth
                    name="recipeName"
                    value={mealPlan.recipeName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={11}>
                  <TextField
                    label="Add Ingredient"
                    fullWidth
                    name="newIngredient"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1} align="center">
                  <IconButton color="primary" onClick={handleAddIngredient}>
                    <AddIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    {mealPlan.ingredients.map((ingredient, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={ingredient} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
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
  );
};

export default MealPlanFrom;
