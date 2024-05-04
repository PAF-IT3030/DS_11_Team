import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import WorkoutPlanEditForm from "./WorkoutPlanEdit"; // Import the WorkoutPlanEditForm component
import Sidebar from "../Sidebar/Sidebar";

// Styled component for expand icon
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

export default function WorkoutPlanPost() {
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [workoutPlans, setWorkoutPlans] = React.useState([]);
  const [selectedWorkoutPlan, setSelectedWorkoutPlan] = React.useState(null);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  // Function to handle edit action
  const handleEdit = (plan) => {
    setSelectedWorkoutPlan(plan);
    navigate(`/workout-plan/edit/${plan.id}`); // Navigate to edit page
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    axios.delete("http://localhost:9191/api/workout-plan/delete?id=" + id)
      .then((res) => {
        getPlans();
      });
  };

  // Function to fetch workout plans
  const getPlans = () => {
    axios.get("http://localhost:9191/api/workout-plan/get?userId=1")
      .then((res) => {
        console.log(res);
        setWorkoutPlans(res.data.data);
      });
  };

  // Fetch workout plans on component mount
  React.useEffect(() => {
    getPlans();
  }, []);

  // Function to handle delete confirmation dialog opening
  const handleDeleteConfirmation = (id) => {
    setSelectedWorkoutPlan(id);
    setConfirmationDialogOpen(true);
  };

  // Function to handle closing of delete confirmation dialog
  const handleCloseConfirmationDialog = () => {
    setConfirmationDialogOpen(false);
  };

  // Function to handle confirmed deletion of a workout plan
  const handleDeleteConfirmed = () => {
    handleDelete(selectedWorkoutPlan);
    setConfirmationDialogOpen(false);
  };

  return (
    <div>
      <>
        {showEditForm ? (
          <WorkoutPlanEditForm
            editPlan={selectedWorkoutPlan}
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
                  MY WORKOUT PLAN POST
                </Typography>
                <Grid container spacing={3}>
                  {workoutPlans.map((plan, index) => (
                    <Grid item xs={4} key={index}>
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
                              {plan.title}
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
                              Steps
                            </span>
                            <Typography sx={{ fontWeight: "bold" }}>
                              {plan.steps}
                            </Typography>
                          </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                          <IconButton aria-label="edit">
                            <EditIcon
                              onClick={() => {
                                setSelectedWorkoutPlan(plan);
                                setShowEditForm(true);
                              }}
                            />
                          </IconButton>
                          <IconButton aria-label="delete post">
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
                Are you sure you want to delete this workout plan?
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
