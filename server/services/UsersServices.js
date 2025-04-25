const bcryptjs = require("bcryptjs");

class UsersServices {
  constructor(models) {
    this.models = models;
  }
  async  getAllUsers(){
    const users = await this.models.users.find()
      return users;
  }
  async authMe(id) {
    const user = await this.models.users.findById(id).populate('friends').exec();
    if (!user) throw new Error("User not found");
    const { password, ...userData } = user._doc;
    return userData;
  }

  async authRegister(body) {
    const existingUser = await this.models.users.findOne({ email: body.email });
    if (existingUser) throw new Error('User with this email already exists');
    const doc = await this.models.users(body);
    const user = await doc.save();
    const { password, ...userData } = user._doc;
    return userData;
}
  async authLogin(body) {
    const user = await this.models.users.findOne({ email: body.email });
    if (user) {
      const valid = await bcryptjs.compare(body.password, user.password);
      if (valid) {
        const userData = await user.validUser()
        return userData
      } else{return { success: false, message: "Invalid email or password" }}
      } else{return { success: false, message: "Invalid email or password" }}
  }
  async updateUser(body, id) {
        const user = await this.models.users.findByIdAndUpdate(id, body, { new: true }).populate('friends').exec() 
        return user;
}

  async logOut(id) {
    const user = await this.models.users.findByIdAndUpdate(id, { active: false }, { new: true });
    return { success: true, message: "User logged out successfully", user };
}

async addFriend(userId, friendId) {
  // Fetch both users
  const friend = await this.models.users.findById(friendId);
  const user = await this.models.users.findById(userId);
  if (!friend || !user) {
    throw new Error("User not found");
  }
  if (user.friends.includes(friendId)) {
    return { success: false, message: "Already friends" };
  }
  const doc = new this.models.friends({ ...friend._doc, user: userId });
  const newFriend = await doc.save();
  const updateUser = await this.models.users.findByIdAndUpdate(
    userId,
    { $push: { friends: friendId } },
    { new: true }
  ).populate('friends').exec() 

  return {
    success: true,
    user: updateUser,
    newFriend: newFriend
  };
}

async removeFriend(userId, friendId) {
  const user = await this.models.users.findById(userId);
  if (!user) throw new Error("User not found");

  const updatedUser = await this.models.users.findByIdAndUpdate(
    userId,
    { $pull: { friends: friendId } },
    { new: true }
  );

  await this.models.friends.deleteOne({ user: userId, _id: friendId });

  return { success: true, user: updatedUser };
}
async searchUsers(query) {
  const regex = new RegExp(query, 'i'); 
  const users = await this.models.users.find({
      $or: [
          { name: { $regex: regex } }, 
          { email: { $regex: regex } } 
      ]
  }).populate('friends').exec();
  return users;
}



}

module.exports = UsersServices;
