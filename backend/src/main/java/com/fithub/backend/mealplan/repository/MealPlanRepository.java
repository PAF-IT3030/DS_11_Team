package com.fithub.backend.mealplan.repository;

import com.fithub.backend.mealplan.entity.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanRepository extends JpaRepository<MealPlan, Long> {  

}
