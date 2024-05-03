package com.fithub.backend.mealplan.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class MealPlanResponseDto {

    private String dietary;
    private Long id;
    private String instructions;
    private String recipeName;
    private double calories;
    private double protein;
    private double carbs;
    private double fat;
    private int portionSize;
    private List<IngredientResponseDto> ingredients;
    private List<String> images;

}
