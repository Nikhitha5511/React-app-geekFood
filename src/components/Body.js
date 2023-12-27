// import React from 'react';
// import restaurants from './Restaurants';
// import {useState} from 'react';
// const Body=()=>{

//     const [searchTerm, setSearchTerm] = useState('');
//   const [minRating, setMinRating] = useState(0);

  
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   const handleMinRating = (event) => {
//     setMinRating(parseInt(event.target.value));
//   };

//   const filteredRestaurants = restaurants.filter(
//     (restaurant) =>
//       restaurant.name.toLowerCase().includes(searchTerm) ||
//       restaurant.cuisineType.toLowerCase().includes(searchTerm) ||
//       restaurant.location.toLowerCase().includes(searchTerm)
//   ).filter((restaurant) => restaurant.rating >= minRating);
  
//     return(
//         <div className='mainContainer'>
//          <div className='search'>
//             <input 
//             type='text' 
//             placeholder='Search by name, cuisine, or location...'
//             onChange={handleSearch}
//             >
//           </input>
//            <span>Minimum Rating: </span> 
//            <input type='number'
//             value={minRating}
//             onChange={handleMinRating}
//            ></input>
//          </div>
//          <div className='cardContainer'>
//         {restaurants.map((restaurant) => (
//           <div key={restaurant.id} className='EachCard'>
//             <div className='firstFlex'>
//               <h3>{restaurant.name}</h3>
//               <p>{restaurant.rating}</p>
//             </div>
//             <p>{restaurant.location}</p>
//             <div className='lastFlex'>
//               <p>{restaurant.cuisineType}</p>
//               <p>Visit Menu</p>
//             </div>
//             </div>

//         ))}
//         {filteredRestaurants.map((restaurant) => (
//           <div key={restaurant.id} className='EachCard'>
//           </div>
//         ))}
//       </div>
//       </div>
        
//     )
//         }
// export default Body;


import React, { useState } from 'react';
import restaurants from './Restaurants';

const Body = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleMinRating = (event) => {
    setMinRating(parseInt(event.target.value));
  };

  const filteredRestaurants = restaurants
    .filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisineType.toLowerCase().includes(searchTerm) ||
        restaurant.location.toLowerCase().includes(searchTerm)
    )
    .filter((restaurant) => restaurant.rating >= minRating);

  return (
    <div className='mainContainer'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search by name, cuisine, or location...'
          onChange={handleSearch}
        />
        <span>Minimum Rating: </span>
        <input
          type='number'
          value={minRating}
          onChange={handleMinRating}
        />
      </div>
      <div className='cardContainer'>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className='EachCard'>
            <div className='firstFlex'>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.rating}</p>
            </div>
            <p>{restaurant.location}</p>
            <div className='lastFlex'>
              <p>{restaurant.cuisineType}</p>
              <p>Visit Menu</p>
            </div>
          </div>
        ))}
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className='EachCard'>
            <div className='firstFlex'>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.rating}</p>
            </div>
            <p>{restaurant.location}</p>
            <div className='lastFlex'>
              <p>{restaurant.cuisineType}</p>
              <p>Visit Menu</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
