package com.fithub.backend.workoutplan.entity;

import com.fithub.backend.mealplan.entity.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class WorkoutPlanPost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "workout_plan_id", referencedColumnName = "id")
    private WorkoutPlan workoutPlan;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

}
