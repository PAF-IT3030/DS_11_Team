package com.fithub.backend.mealplan.repository;

import com.fithub.backend.mealplan.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {   

}
