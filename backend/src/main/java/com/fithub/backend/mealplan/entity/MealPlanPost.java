package com.fithub.backend.mealplan.entity;

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
public class MealPlanPost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "meal_plan_id", referencedColumnName = "id")
    private MealPlan mealPlan;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

}
