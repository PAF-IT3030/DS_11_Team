package com.fithub.backend.workoutplan.repository;

import com.fithub.backend.workoutplan.entity.WorkoutPlanPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutPlanPostRepository extends JpaRepository<WorkoutPlanPost, Long> {
}
