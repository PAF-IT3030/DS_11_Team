package com.fithub.backend.mealplan.entity;

import java.util.List;

import com.fithub.backend.workoutplan.entity.WorkoutPlan;
import com.fithub.backend.workoutplan.entity.WorkoutPlanPost;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "user")
    private List<MealPlan> mealPlanList;

    @OneToMany(mappedBy = "user")
    private List<MealPlanPost> mealPlanPosts;

        @OneToMany(mappedBy = "user")
    private List<WorkoutPlan> workoutPlanList;

    @OneToMany(mappedBy = "user")
    private List<WorkoutPlanPost> workoutPlanPosts;
}
