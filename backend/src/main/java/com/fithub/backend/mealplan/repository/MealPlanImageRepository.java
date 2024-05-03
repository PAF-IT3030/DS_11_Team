package com.fithub.backend.mealplan.repository;

import com.fithub.backend.mealplan.entity.MealPlanImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanImageRepository extends JpaRepository<MealPlanImage, Long> {
}
