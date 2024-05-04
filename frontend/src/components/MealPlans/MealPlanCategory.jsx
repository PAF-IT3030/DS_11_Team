import React from "react";
import { Link } from "react-router-dom";
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton,Button } from '@mui/material';
import vegeterian from '../../assets/mealplans/vegeterian.jpg';
import vegan from '../../assets/mealplans/vegan.jpg';
import keto from '../../assets/mealplans/keto.jpg';
import pescatarian from '../../assets/mealplans/pescatarian.jpg';
import flexitarian from '../../assets/mealplans/Flexitarian.jpg';
import glutenfree from '../../assets/mealplans/glutenfree.jpg'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const MealPlansCategory = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 50px', minHeight: 'calc(100vh - 100px)' }}>
      <ImageList sx={{ width: '100%', gap: '50px',  }} cols={3}>
        <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div" style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'font-mono',color:'rgb(59 130 246)',textAlign:'center' }}>SELECT YOUR MEAL PLAN CATEGORY</ListSubheader>

          </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ borderRadius: '10px' , width: '90%', height: '80%' }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '10px' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              actionIcon={
                <Link to="/mealplansform"> {/* Navigate to the meal plan form */}
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                <AddCircleRoundedIcon/>
                </IconButton>
              </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
     
      </div>
    </div>
  );
}

const itemData = [
  {
    img: vegeterian,
    title: 'Vegeterian',
    description: 'Excludes meat, poultry, and seafood but may include dairy products and eggs.',
    featured: true,
  },
  {
    img: vegan,
    title: 'Vegan',
    description: 'Excludes all animal products, including meat, dairy, eggs, and sometimes even honey.',
  },
  {
    img: keto,
    title: 'Keto',
    description: 'A low-carb, high-fat diet that forces the body to burn fats rather than carbohydrates.',
  },
  {
    img: pescatarian,
    title: 'Pescatarian',
    description: 'Includes fish and other seafood but excludes other types of meat',
  },
  {
    img: flexitarian,
    title: 'Fexitarian',
    description: 'Consists of plant-based foods but occasionally includes meat or fish.',
  },
  {
    img: glutenfree,
    title: 'Glutenfree',
    description: 'Eliminates gluten, a protein found in wheat, barley, and rye, which is essential for people with celiac disease or gluten sensitivity',
  },
];

export default  MealPlansCategory;
