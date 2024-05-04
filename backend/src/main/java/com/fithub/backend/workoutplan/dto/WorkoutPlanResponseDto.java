package com.fithub.backend.workoutplan.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class WorkoutPlanResponseDto {

    private Long id;
    private String title;
    private String steps;

}
