package com.fithub.backend.mealplan.repository;

import com.fithub.backend.mealplan.entity.MealPlanPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanPostRepository extends JpaRepository<MealPlanPost, Long> {
}
