package com.fithub.backend.mealplan.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fithub.backend.mealplan.entity.Ingredient;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)  
public class MealPlanRequestDto {
    private Long id;

    private String instructions;
    private String recipeName;

    private Long userId;

    // private List<String> images;  

}
