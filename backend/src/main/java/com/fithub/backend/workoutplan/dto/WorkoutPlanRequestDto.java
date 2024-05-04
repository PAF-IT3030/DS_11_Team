package com.fithub.backend.workoutplan.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkoutPlanRequestDto {
    private Long id;
    private String title;
    private String steps;
    private Long userId;
}
