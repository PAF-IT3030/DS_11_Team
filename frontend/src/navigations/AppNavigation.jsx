import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MealPlansPage from "../pages/MealPlansPage";
import PostsPage from "../pages/PostsPage";
import WorkoutPlansPage from "../pages/WorkoutPlansPage";
import WorkoutStatusPage from "../pages/WorkoutStatusPage";
import CreatePostModal from "../components/Posts/CreatePostModal";
import MealPlanFrom from "../components/MealPlans/MealPlanForm";
import MealPlanPost from "../components/MealPlans/MealPlanPost";
import MealPlansCategory from "../components/MealPlans/MealPlanCategory";
import MealPlanEditFrom from "../components/MealPlans/MealPlanEdit";
import WorkoutPlanFrom from "../components/WorkoutPlans/WorkoutPlanForm";
import WorkoutPlanPost from "../components/WorkoutPlans/WorkoutPlanPost";
import WorkoutPlansCategory from "../components/WorkoutPlans/WorkoutPlanCategory";
import WorkoutPlanEditFrom from "../components/WorkoutPlans/WorkoutPlanEdit";
import LoginPage from "../pages/LoginPage";
import Sidebar from "../components/Sidebar/Sidebar";

const AppNavigation = () => {
  return (
    <div className="h-dvh">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/workoutstatus" element={<WorkoutStatusPage />} />
          <Route path="/mealplans" element={<MealPlansPage />} />
          <Route path="/workoutplans" element={<WorkoutPlansPage />} />
          <Route path="/gallery" element={<CreatePostModal />} />
          <Route path="/mealplansform" element={<MealPlanFrom />} />
          <Route path="/mealplanspost" element={<MealPlanPost />} />
          <Route path="/mealplancategory" element={<MealPlansCategory />} />
          <Route path="/meal-plan/edit/:id" element={<MealPlanEditFrom />} />
          <Route path="/workoutplansform" element={<WorkoutPlanFrom />} />
          <Route path="/workoutplanspost" element={<WorkoutPlanPost />} />
          <Route path="/workoutplancategory" element={<WorkoutPlansCategory />} />
          <Route path="/workout-plan/edit/:id" element={<WorkoutPlanEditFrom />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppNavigation;
