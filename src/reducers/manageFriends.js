export function manageFriends(state, action){

  let newFriend = {};
  switch (action.type) {

    case 'ADD_FRIEND':
      return({...state,
        friend: [
          ...state.friends,
            action.friend
        ]
        });
    default:
      return state;
  }
}
