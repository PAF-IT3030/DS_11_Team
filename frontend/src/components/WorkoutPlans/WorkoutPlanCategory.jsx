// import React from "react";
// import { Link } from "react-router-dom";
// import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material';
// import workout1 from '../../assets/workoutplans/workout1.jpg';
// import workout2 from '../../assets/workoutplans/workout2.jpg';
// import workout3 from '../../assets/workoutplans/workout3.jpg';
// import workout4 from '../../assets/workoutplans/workout4.jpg';
// import workout5 from '../../assets/workoutplans/workout5.jpg';
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

// const WorkoutPlansCategory = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', padding: '0 50px', minHeight: 'calc(100vh - 100px)' }}>
//       <ImageList sx={{ width: '100%', gap: '50px' }} cols={3}>
//         <ImageListItem key="Subheader" cols={3}>
//           <ListSubheader component="div" style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'font-mono', color: 'rgb(59 130 246)', textAlign: 'center' }}>SELECT YOUR WORKOUT PLAN CATEGORY</ListSubheader>
//         </ImageListItem>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img} sx={{ borderRadius: '10px', width: '90%', height: '80%' }}>
//             <img
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//               style={{ borderRadius: '10px' }}
//             />
//             <ImageListItemBar
//               title={item.title}
//               subtitle={item.description}
//               actionIcon={
//                 <Link to="/workoutplansform"> {/* Navigate to the workout plan form */}
//                   <IconButton
//                     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                     aria-label={`info about ${item.title}`}
//                   >
//                     <AddCircleRoundedIcon />
//                   </IconButton>
//                 </Link>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//       <div style={{ textAlign: 'center', marginTop: '20px' }}></div>
//     </div>
//   );
// }

// const itemData = [
//   {
//     img: workout1,
//     title: 'Cardio',
//     description: 'Improve cardiovascular health and burn calories with various cardio exercises.',
//     featured: true,
//   },
//   {
//     img: workout2,
//     title: 'Strength Training',
//     description: 'Build muscle mass and strength with resistance exercises like weightlifting.',
//   },
//   {
//     img: workout3,
//     title: 'Yoga',
//     description: 'Increase flexibility, strength, and relaxation through various yoga poses and practices.',
//   },
//   {
//     img: workout4,
//     title: 'HIIT',
//     description: 'Burn fat and boost metabolism with high-intensity interval training (HIIT) workouts.',
//   },
//   {
//     img: workout5,
//     title: 'Pilates',
//     description: 'Improve core strength, flexibility, and posture with Pilates exercises.',
//   },
// ];

// export default WorkoutPlansCategory;
