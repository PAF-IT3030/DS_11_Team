import React from "react";
import { images, names } from "../../constants/data";
import MealPlan from "../../assets/meal_plan.png";
import WorkoutPlan from "../../assets/workout_plan.png";
import WorkoutStatus from "../../assets/workout_status.png";
import Friends from "../../assets/1.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";

const itemStyle = {
  container: "flex items-center gap-3 py-2 px-5 rounded-2xl hover:bg-black/5",
  img: "w-8",
  span: "text-lg",
};

const LeftBar = () => {
  return (
    <div
      style={{ flex: 2, top: "70px", height: "calc(100vh - 70px)" }}
      className="flex-2 sticky overflow-auto bg-white drop-shadow"
    >
      {/* container */}
      <div className="p-5">
        {/* menu */}
        <div className="flex flex-col gap-5">
          {/* user */}
          <div className="flex items-center gap-3 py-2 px-5">
            <img
              src={images.user}
              className="w-10 h-10 rounded-full bg-cover"
              alt=""
            />
            <span className="text-lg">{names.user}</span>
          </div>
          {/* meal plan */}
          <button className={itemStyle.container + "  "}>
            <img className={itemStyle.img} src={MealPlan} alt="" />
            <span className={itemStyle.span}>Meal Plan</span>
          </button>
          {/* workout plan */}
          <button className={itemStyle.container}>
            <img className={itemStyle.img} src={WorkoutPlan} alt="" />
            <span className={itemStyle.span}>Workout Plan</span>
          </button>
          {/* workout status */}
          <button className={itemStyle.container}>
            <img className={itemStyle.img} src={WorkoutStatus} alt="" />
            <span className={itemStyle.span}>Workout Status</span>
          </button>
          {/* videos */}
          {/* <button className={itemStyle.container}>
            <img className={itemStyle.img} src={Videos} alt="" />
            <span className={itemStyle.span}>Videos</span>
          </button> */}
          {/* gallery */}
          {/* <button className={itemStyle.container}>
            <img className={itemStyle.img} src={Gallery} alt="" />
            <span className={itemStyle.span}>Gallery</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
