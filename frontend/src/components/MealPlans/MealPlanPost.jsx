import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import MealPlanEditFrom from "./MealPlanEdit";
import Sidebar from "../Sidebar/Sidebar";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MealPlanPost() {
  const [expanded, setExpanded] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [mealPlans, setMealPlans] = React.useState([]);
  const [selectedMealPlan, setSelectedMealPlan] = React.useState(null);
  const [confirmationDialogOpen, setConfirmationDialogOpen] =
    React.useState(false);
  const navigate = useNavigate();

  const handleEdit = (plan) => {
    setSelectedMealPlan(plan);
    navigate(`/meal-plan/edit/${plan.id}`); // Navigate to edit page
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:9191/api/meal-plan/delete?id=" + id)
      .then((res) => {
        getPlans();
      });
  };

  const getPlans = () => {
    axios
      .get("http://localhost:9191/api/meal-plan/get?userId=1")
      .then((res) => {
        console.log(res);
        setMealPlans(res.data.data);
      });
  };

  React.useEffect(() => {
    getPlans();
  }, []);

  const handleDeleteConfirmation = (id) => {
    setSelectedMealPlan(id);
    setConfirmationDialogOpen(true);
  };

  const handleCloseConfirmationDialog = () => {
    setConfirmationDialogOpen(false);
  };

  const handleDeleteConfirmed = () => {
    handleDelete(selectedMealPlan);
    setConfirmationDialogOpen(false);
  };

  return (
    <div>
      <>
        {showEditForm ? (
          <MealPlanEditFrom
            editPlan={selectedMealPlan}
            onDoneEdit={(isDone) => {
              if (isDone) {
                setShowEditForm(false);
                getPlans();
              }
            }}
          />
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <Box margin={10}>
                <Typography
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    fontFamily: "font-mono",
                    color: "rgb(59 130 246)",
                    textAlign: "center",
                  }}
                >
                  MY MEAL PLAN POST
                </Typography>
                <Grid container spacing={3}>
                  {mealPlans.map((plan, index) => (
                    <Grid item xs={4}>
                      <Card sx={{ bgcolor: "#E8DFCA" }}>
                        <CardHeader
                          title={
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "#322C2B",
                                fontSize: "2rem",
                              }}
                            >
                              {plan.recipeName}
                            </span>
                          }
                        />

                        <CardContent>
                          <Typography
                            variant="body2"
                            color="#322C2B"
                            style={{
                              fontSize: "1.2rem",
                              fontFamily: "Arial, sans-serif",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "#322C2B",
                                fontSize: "1.5rem",
                              }}
                            >
                              Instruction
                            </span>
                            <Typography sx={{ fontWeight: "bold" }}>
                              {plan.instructions}
                            </Typography>
                          </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          <IconButton aria-label="delete post">
                            <EditIcon
                              onClick={() => {
                                setSelectedMealPlan(plan);
                                setShowEditForm(true);
                              }}
                            />
                          </IconButton>
                          <IconButton aria-label="edit">
                            <DeleteIcon
                              onClick={() => handleDeleteConfirmation(plan.id)}
                            />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
            <Dialog
              open={confirmationDialogOpen}
              onClose={handleCloseConfirmationDialog}
            >
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this meal plan?
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseConfirmationDialog} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteConfirmed}
                  color="primary"
                  autoFocus
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </>
    </div>
  );
}
