
   
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';
// display state
// const initialState = {
//   person: {
//     name: {
//       title: "Mr",
//       first: "Silas",
//       last: "Petersen"
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/70.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
//     }
//   },
//   isFetching: false,
//   //error: 'Hey we have an error'
//   error: ''
// };

// Load state
// const initialState = {
//   person: {
//   },
//   isFetching: true,
//   //error: 'Hey we have an error'
//   error: ''
// };
// Error state
// 1
// const initialState = {
//   person: {
//   },
//   isFetching: true,
//   error: 'Hey we have an error' 
// };
// Error state
// 2
const initialState = {
  person: {
    name: {
      title: "Mr",
      first: "Silas",
      last: "Petersen"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    }
  },
  isFetching: false,
  error: 'Hey we have an error'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return ({
        ...state,
        person: {},
        isFinite: true,
        error: ''
      });
    default:
      return state;
  }
};