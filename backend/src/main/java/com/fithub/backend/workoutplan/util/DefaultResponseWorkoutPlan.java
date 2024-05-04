package com.fithub.backend.workoutplan.util;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DefaultResponseWorkoutPlan {
    private String code;
    private String title;
    private String message;
    private Object data;

    public DefaultResponseWorkoutPlan(String code, String title, String message) {
        this.code = code;
        this.title = title;
        this.message = message;
    }

    public DefaultResponseWorkoutPlan(String code, String title, String message, Object data) {
        this.code = code;
        this.title = title;
        this.message = message;
        this.data = data;
    }
}
