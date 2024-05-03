package com.fithub.backend.mealplan.controller;

import com.fithub.backend.mealplan.dto.MealPlanRequestDto;
import com.fithub.backend.mealplan.service.MealPlanService;
import com.fithub.backend.mealplan.util.DefaultResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap; 

@RestController
@RequestMapping("/api/meal-plan")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")  
public class MealPlanController {

    private final MealPlanService mealPlanService;

    @PostMapping("/create")
    public ResponseEntity<DefaultResponse> createMealPlan(@RequestBody MealPlanRequestDto mealPlanRequestDto) {

        try {
            return ResponseEntity.ok(mealPlanService.createMealPlan(mealPlanRequestDto));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponse.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());

        }

    }
  
    @GetMapping("/get")
    public ResponseEntity<DefaultResponse> getMealPlanList(@RequestParam("userId") String userID) {
        try {

            Long userId = Long.valueOf(userID);
            return ResponseEntity.ok(mealPlanService.getMealPlanList(userId));

        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponse.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

    @PutMapping("/edit")
    public ResponseEntity<DefaultResponse> updateMealPlan(@RequestBody MealPlanRequestDto mealPlanRequestDto) {
        try {
            return ResponseEntity.ok(mealPlanService.updateMealPlan(mealPlanRequestDto));

        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponse.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<DefaultResponse> deleteMealPlan(@RequestParam("id") String id) {
        try {

            Long planId = Long.valueOf(id);

            return ResponseEntity.ok(mealPlanService.deleteMealPlan(planId));

        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponse.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

}
