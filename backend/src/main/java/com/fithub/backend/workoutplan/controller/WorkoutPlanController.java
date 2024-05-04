package com.fithub.backend.workoutplan.controller;

import com.fithub.backend.workoutplan.dto.WorkoutPlanRequestDto;
import com.fithub.backend.workoutplan.service.WorkoutPlanService;
import com.fithub.backend.workoutplan.util.DefaultResponseWorkoutPlan;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workout-plan")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class WorkoutPlanController {

    private final WorkoutPlanService workoutPlanService;

    @PostMapping("/create")
    public ResponseEntity<DefaultResponseWorkoutPlan> createWorkoutPlan(@RequestBody WorkoutPlanRequestDto workoutPlanRequestDto) {
        try {
            return ResponseEntity.ok(workoutPlanService.createWorkoutPlan(workoutPlanRequestDto));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponseWorkoutPlan.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

    @GetMapping("/get")
    public ResponseEntity<DefaultResponseWorkoutPlan> getWorkoutPlanList(@RequestParam("userId") String userID) {
        try {
            Long userId = Long.valueOf(userID);
            return ResponseEntity.ok(workoutPlanService.getWorkoutPlanList(userId));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponseWorkoutPlan.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

    @PutMapping("/edit")
    public ResponseEntity<DefaultResponseWorkoutPlan> updateWorkoutPlan(@RequestBody WorkoutPlanRequestDto workoutPlanRequestDto) {
        try {
            return ResponseEntity.ok(workoutPlanService.updateWorkoutPlan(workoutPlanRequestDto));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponseWorkoutPlan.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<DefaultResponseWorkoutPlan> deleteWorkoutPlan(@RequestParam("id") String id) {
        try {
            Long planId = Long.valueOf(id);
            return ResponseEntity.ok(workoutPlanService.deleteWorkoutPlan(planId));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(DefaultResponseWorkoutPlan.builder()
                    .code("400")
                    .title("Failed")
                    .message(e.getMessage())
                    .build());
        }
    }
}
