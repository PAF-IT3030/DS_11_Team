package com.fithub.backend.workoutplan.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import com.fithub.backend.mealplan.entity.User;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(mappedBy = "workoutPlan")
    private WorkoutPlanPost workoutPlanPost;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "workoutPlan")
    private List<WorkoutPlanImage> workoutPlanImages;

    private String title;
    private String steps;

}
