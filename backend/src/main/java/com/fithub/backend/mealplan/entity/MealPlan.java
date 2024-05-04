package com.fithub.backend.mealplan.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor 
@Entity
public class MealPlan {  

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(mappedBy = "mealPlan")
    private MealPlanPost mealPlanPost;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "mealPlan")
    private List<MealPlanImage> mealPlanImages;

    @OneToMany(mappedBy = "mealPlan")
    private List<Ingredient> ingredients;

    private String dietary;
    private String cookingInstructions;
    private String recipeName;
    private double calories;
    private double protein;
    private double carbs;
    private double fat;
    private int portionSize;

}
