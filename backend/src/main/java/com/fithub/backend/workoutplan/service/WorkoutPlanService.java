package com.fithub.backend.workoutplan.service;

import com.fithub.backend.workoutplan.dto.WorkoutPlanRequestDto;
import com.fithub.backend.workoutplan.dto.WorkoutPlanResponseDto;
import com.fithub.backend.workoutplan.entity.WorkoutPlan;
import com.fithub.backend.mealplan.entity.User;
import com.fithub.backend.workoutplan.repository.WorkoutPlanRepository;
import com.fithub.backend.mealplan.repository.UserRepository;
import com.fithub.backend.workoutplan.util.DefaultResponseWorkoutPlan;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class WorkoutPlanService {

    private final WorkoutPlanRepository workoutPlanRepository;
    private final UserRepository userRepository;

    public DefaultResponseWorkoutPlan updateWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto) throws Exception {
        try {

            Optional<User> userOptional = userRepository.findById(workoutPlanRequestDto.getUserId());

            if (userOptional.isPresent()) {

                WorkoutPlan workoutPlan = getExistingWorkoutPlan(workoutPlanRequestDto, userOptional);

                saveWorkoutPlan(workoutPlanRequestDto, workoutPlan);

                return new DefaultResponseWorkoutPlan("200", "Success", "Workout plan updated successfully!");

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public DefaultResponseWorkoutPlan createWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto) throws Exception {

        try {

            Optional<User> userOptional = userRepository.findById(workoutPlanRequestDto.getUserId());

            if (userOptional.isPresent()) {

                WorkoutPlan workoutPlan = getWorkoutPlan(workoutPlanRequestDto, userOptional);
                saveWorkoutPlan(workoutPlanRequestDto, workoutPlan);

                return new DefaultResponseWorkoutPlan("200", "Success", "Workout plan created successfully!");

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }

    }

    public DefaultResponseWorkoutPlan deleteWorkoutPlan(Long id) throws Exception {
        try {

            Optional<WorkoutPlan> workoutPlanOptional = workoutPlanRepository.findById(id);

            if (workoutPlanOptional.isPresent()) {
                workoutPlanRepository.delete(workoutPlanOptional.get());

                return new DefaultResponseWorkoutPlan("200", "Success", "Workout plan deleted successfully!");
            } else {
                throw new Exception("Workout plan not present");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }
    }

    private void saveWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto, WorkoutPlan workoutPlan) {
        workoutPlan = workoutPlanRepository.save(workoutPlan);
    }

    private static WorkoutPlan getWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto, Optional<User> userOptional) {
        User user = userOptional.get();

        WorkoutPlan workoutPlan = new WorkoutPlan();
        return getWorkoutPlan(workoutPlanRequestDto, user, workoutPlan);
    }

    private WorkoutPlan getExistingWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto, Optional<User> userOptional)
            throws Exception {
                User user = userOptional.get();

        Optional<WorkoutPlan> workoutPlanOptional = workoutPlanRepository.findById(workoutPlanRequestDto.getId());

        if (workoutPlanOptional.isPresent()) {
            WorkoutPlan workoutPlan = workoutPlanOptional.get();

            return getWorkoutPlan(workoutPlanRequestDto, user, workoutPlan);
        } else {
            throw new Exception("Workout plan not found");
        }

    }

    private static WorkoutPlan getWorkoutPlan(WorkoutPlanRequestDto workoutPlanRequestDto, User user, WorkoutPlan workoutPlan) {
        workoutPlan.setTitle(workoutPlanRequestDto.getTitle());
        workoutPlan.setSteps(workoutPlanRequestDto.getSteps());

        workoutPlan.setUser(user);
        return workoutPlan;
    }

    public DefaultResponseWorkoutPlan getWorkoutPlanList(Long userId) throws Exception {
        try {

            Optional<User> userOptional = userRepository.findById(userId);

            if (userOptional.isPresent()) {

                User user = userOptional.get();

                List<WorkoutPlanResponseDto> workoutPlanResponseDtoList = new ArrayList<>();

                for (WorkoutPlan workoutPlan : user.getWorkoutPlanList()) {
                    workoutPlanResponseDtoList.add(WorkoutPlanResponseDto.builder()
                            .id(workoutPlan.getId())
                            .title(workoutPlan.getTitle())
                            .steps(workoutPlan.getSteps())
                            .build());
                }

                return new DefaultResponseWorkoutPlan("200", "Success", "Workout plans get success", workoutPlanResponseDtoList);

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }
    }
}
