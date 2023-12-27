const restaurants = [
    {
      id: 1,
      name: '.CN Chinese',
      cuisineType: 'Chinese',
      location: ' 228 City Road, Cardiff CF24 3JH',
      rating: '⭐ ⭐ ⭐ ⭐ ⭐'   
     },
     {
        id: 2,
        name: '@ Thai',
        cuisineType: 'Thai',
        location: ' 376 Rayleigh Road, Essex SS9 5PT',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'  
     },
     {
        id: 3,
        name: '@ Thai Restaurant',
        cuisineType: 'Thai',
        location: ' 30 Greyhound Road Hammersmith, London W6 8NX',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 4,
        name: '@ Thai Restaurant',
        cuisineType: 'Thai',
        location: ' 30 Greyhound Road Hammersmith, London W6 8NX',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 5,
        name: '@ Thai Restaurant',
        cuisineType: 'Curry',
        location: ' 9 Broughton Hall Road, Broughton CH4 0QR',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 6,
        name: '007 Takeaway',
        cuisineType: 'Pizza',
        location: '6 Drummond Street, Rotherham S65 1HY',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 7,
        name: '042 Restaurant & Bar',
        cuisineType: 'African',
        location: ' 885 High Road Leytonstone, London E11 1HR',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 8,
        name: '042 Restaurant & Bar',
        cuisineType: 'African',
        location: ' 885 High Road Leytonstone, London E11 1HR',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 9,
        name: '042 Restaurant & Bar',
        cuisineType: 'African',
        location: ' 885 High Road Leytonstone, London E11 1HR',
        rating: '⭐ ⭐ ⭐ '
     },
     {
        id: 10,
        name: '042 Restaurant & Bar',
        cuisineType: 'African',
        location: ' 885 High Road Leytonstone, London E11 1HR',
        rating: '⭐ ⭐ ⭐ '
     },
     {
        id: 11,
        name: '1 2 3 Chinese',
        cuisineType: 'Chinese',
        location: 'Unit 4 Spencer House, Swalwell NE16 3DS',
        rating: '⭐ ⭐ ⭐ '
     },
     {
        id: 12,
        name: '1 2 3 Chinese',
        cuisineType: 'Chinese',
        location: 'Unit 4 Spencer House, Swalwell NE16 3DS',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 13,
        name: '1 2 3 Chinese',
        cuisineType: 'Chinese',
        location: 'Unit 4 Spencer House, Swalwell NE16 3DS',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     { 
        id: 14,
        name: '1 2 3 Chinese',
        cuisineType: 'Chinese',
        location: 'Unit 4 Spencer House, Swalwell NE16 3DS',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 15,
        name: '100 Menu',
        cuisineType: 'Chinese',
        location: '50 Wallgate, Wigan WN1 1JU',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 16,
        name: '104 Turkish BBQ',
        cuisineType: 'Turkish',
        location: '104 Tanners Lane, Essex IG6 1QE',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 17,
        name: '109 Ristorante',
        cuisineType: 'Pizza',
        location: '109 Westbourne Park Road, London W2 5QL',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 18,
        name: '113 Fish Bar',
        cuisineType: 'Chinese',
        location: '113 Poulton Road, Merseyside CH44 9DE',
        rating: '⭐ ⭐ ⭐ ⭐ ⭐'
     },
     {
        id: 19,
        name: '1498 The Spice Affair',
        cuisineType: 'Curry',
        location: ' Red Lion Hotel, Spalding PE11 1SU',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     { 
        id: 20,
        name: '168 Chinese & Cantonese Takeaway',
        cuisineType: 'Chinese',
        location: '17 Alexandra Road, West Yorkshire LS18 4HE',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     {
        id: 21,
        name: '1A Wok',
        cuisineType: 'Chinese',
        location: ' Unit 2 30 Greenock Road, Bishopton PA7 5JN',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     {
        id: 22,
        name: '1A Wok',
        cuisineType: 'Chinese',
        location: ' Unit 2 30 Greenock Road, Bishopton PA7 5JN',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     {
        id: 23,
        name: '1A Wok',
        cuisineType: 'Chinese',
        location: ' Unit 2 30 Greenock Road, Bishopton PA7 5JN',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     {
        id: 24,
        name: '1st Class Pizza',
        cuisineType: 'Chinese',
        location: ' Unit 2 30 Greenock Road, Bishopton PA7 5JN',
        rating: '⭐ ⭐ ⭐ ⭐ '
     },
     {
        id: 25,
        name: '1A Wok',
        cuisineType: 'Chinese',
        location: ' Unit 2 30 Greenock Road, Bishopton PA7 5JN',
        rating: '⭐ ⭐ ⭐ ⭐ '
     }


]

export default restaurants;