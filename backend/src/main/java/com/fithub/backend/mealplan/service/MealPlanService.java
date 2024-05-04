package com.fithub.backend.mealplan.service;

import com.fithub.backend.mealplan.dto.IngredientRequestDto;
import com.fithub.backend.mealplan.dto.IngredientResponseDto;
import com.fithub.backend.mealplan.dto.MealPlanRequestDto;
import com.fithub.backend.mealplan.dto.MealPlanResponseDto;
import com.fithub.backend.mealplan.entity.Ingredient;
import com.fithub.backend.mealplan.entity.MealPlan;
import com.fithub.backend.mealplan.entity.MealPlanImage;
import com.fithub.backend.mealplan.entity.User;
import com.fithub.backend.mealplan.repository.IngredientRepository;
import com.fithub.backend.mealplan.repository.MealPlanImageRepository;
import com.fithub.backend.mealplan.repository.MealPlanRepository;
import com.fithub.backend.mealplan.repository.UserRepository;
import com.fithub.backend.mealplan.util.DefaultResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;  

import java.util.ArrayList;  
import java.util.List;
import java.util.Optional;  

@Service
@AllArgsConstructor
public class MealPlanService { 

    private final MealPlanRepository mealPlanRepository;
    private final UserRepository userRepository;
    private final MealPlanImageRepository mealPlanImageRepository;
    private final IngredientRepository ingredientRepository;

    public DefaultResponse updateMealPlan(MealPlanRequestDto mealPlanRequestDto) throws Exception {
        try {

            Optional<User> userOptional = userRepository.findById(mealPlanRequestDto.getUserId());

            if (userOptional.isPresent()) {

                MealPlan mealPlan = getExistingMealPlan(mealPlanRequestDto, userOptional);

                saveMealPlan(mealPlanRequestDto, mealPlan);

                return new DefaultResponse("200", "Success", "Meal plan updated successfully!");

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public DefaultResponse createMealPlan(MealPlanRequestDto mealPlanRequestDto) throws Exception {

        try {

            Optional<User> userOptional = userRepository.findById(mealPlanRequestDto.getUserId());

            if (userOptional.isPresent()) {

                MealPlan mealPlan = getMealPlan(mealPlanRequestDto, userOptional);
                saveMealPlan(mealPlanRequestDto, mealPlan);

                return new DefaultResponse("200", "Success", "Meal plan created successfully!");

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }

    }

    public DefaultResponse deleteMealPlan(Long id) throws Exception {
        try {

            Optional<MealPlan> mealPlanOptional = mealPlanRepository.findById(id);

            if (mealPlanOptional.isPresent()) {

                for (Ingredient ingredient : mealPlanOptional.get().getIngredients()) {
                    ingredientRepository.delete(ingredient);
                }

                for (MealPlanImage mealPlanImage : mealPlanOptional.get().getMealPlanImages()) {
                    mealPlanImageRepository.delete(mealPlanImage);
                }

                mealPlanRepository.delete(mealPlanOptional.get());

                return new DefaultResponse("200", "Success", "Meal plan deleted successfully!");

            } else {
                throw new Exception("Meal plan not present");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }

    }

    private void saveMealPlan(MealPlanRequestDto mealPlanRequestDto, MealPlan mealPlan) {
        mealPlan = mealPlanRepository.save(mealPlan);
    }

    private static MealPlan getMealPlan(MealPlanRequestDto mealPlanRequestDto, Optional<User> userOptional) {
        User user = userOptional.get();

        MealPlan mealPlan = new MealPlan();
        return getMealPlan(mealPlanRequestDto, user, mealPlan);
    }

    private MealPlan getExistingMealPlan(MealPlanRequestDto mealPlanRequestDto, Optional<User> userOptional)
            throws Exception {
        User user = userOptional.get();

        Optional<MealPlan> mealPlanOptional = mealPlanRepository.findById(mealPlanRequestDto.getId());

        if (mealPlanOptional.isPresent()) {
            MealPlan mealPlan = mealPlanOptional.get();

            return getMealPlan(mealPlanRequestDto, user, mealPlan);
        } else {
            throw new Exception("Meal plan not found");
        }

    }

    private static MealPlan getMealPlan(MealPlanRequestDto mealPlanRequestDto, User user, MealPlan mealPlan) {

        mealPlan.setRecipeName(mealPlanRequestDto.getRecipeName());
        mealPlan.setCookingInstructions(mealPlanRequestDto.getInstructions());

        mealPlan.setUser(user);
        return mealPlan;
    }

    public DefaultResponse getMealPlanList(Long userId) throws Exception {
        try {

            Optional<User> userOptional = userRepository.findById(userId);

            if (userOptional.isPresent()) {

                User user = userOptional.get();

                List<MealPlanResponseDto> mealPlanResponseDtoList = new ArrayList<>();

                for (MealPlan mealPlan : user.getMealPlanList()) {

                    List<IngredientResponseDto> ingredientResponseDtoList = new ArrayList<>();

                    for (Ingredient ingredient : mealPlan.getIngredients()) {
                        ingredientResponseDtoList.add(IngredientResponseDto.builder()
                                .name(ingredient.getName())
                                .build());
                    }

                    List<String> images = new ArrayList<>();

                    for (MealPlanImage mealPlanImage : mealPlan.getMealPlanImages()) {
                        images.add(mealPlanImage.getValue());
                    }

                    mealPlanResponseDtoList.add(MealPlanResponseDto.builder()
                            .id(mealPlan.getId())
                            .recipeName(mealPlan.getRecipeName())
                            .ingredients(ingredientResponseDtoList)
                            .calories(mealPlan.getCalories())
                            .carbs(mealPlan.getCarbs())
                            .dietary(mealPlan.getDietary())
                            .fat(mealPlan.getFat())
                            .protein(mealPlan.getProtein())
                            .portionSize(mealPlan.getPortionSize())
                            .instructions(mealPlan.getCookingInstructions())
                            .images(images)
                            .build());
                }

                return new DefaultResponse("200", "Success", "Meal plans get success", mealPlanResponseDtoList);

            } else {
                throw new Exception("User not found");
            }

        } catch (Exception exception) {
            throw new Exception(exception.getMessage());
        }
    }

}
