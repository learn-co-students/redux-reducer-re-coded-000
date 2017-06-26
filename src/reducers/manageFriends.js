export function manageFriends(state, action){

	if(action.type=="ADD_FRIEND"){
       state.friends.push(action.friend)
	}
	else if(action.type=="REMOVE_FRIEND") {
		let friends= state.friends.filter((friend)=>friend.id !== action.id 
		)
		return Object.assign({}, state, {friends: friends})
	}
    return state
}
