package com.fithub.backend.workoutplan.repository;

import com.fithub.backend.workoutplan.entity.WorkoutPlanImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutPlanImageRepository extends JpaRepository<WorkoutPlanImage, Long> {
}
