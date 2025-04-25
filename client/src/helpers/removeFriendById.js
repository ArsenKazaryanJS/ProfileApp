export function removeFriendById(friends, idToRemove) {
    return friends.filter(friend => friend._id !== idToRemove);
  }
  