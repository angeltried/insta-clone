import {USERS} from './users'

export const POSTS = [
  {  
  imageUrl: 'https://64.media.tumblr.com/687bd68bed7ff9f13e51ca1c31879fe7/tumblr_nowvfaIfLk1riulqyo1_1280.pnj',
  user: USERS[0].user,
  likes: 3290,
  caption: 'fine whine',
  profile_picture: USERS[0].image,
  comments: [
    {
      user: 'Megan Fox',
      comment: 'Omg I love that song'
    },
    {
      user: 'Asap Rocky',
      comment: 'Shiii come through'
    },
  ],
},
  {  
  imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1520w,f_auto,q_auto:best/rockcms/2022-04/mila-kunis-kb-1x1-220401-40d64e.jpg',
  user: USERS[3].user,
  likes: 3290,
  caption: 'fine whine',
  profile_picture: USERS[3].image,
  comments: [
    {
      user: 'Jenna Ortega',
      comment: 'Soo dreamy'
    },
    {
      user: 'Will Ferrell',
      comment: 'You can never dream enough'
    },
  ],
},
]