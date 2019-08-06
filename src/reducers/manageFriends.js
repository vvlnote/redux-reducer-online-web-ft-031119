export function manageFriends(state, action){

  let newFriend = {};
  switch (action.type) {

    case 'ADD_FRIEND':
      return(...state.friends, newFriend, {name: action.friend} );
    default:
      return state;
  }
}
