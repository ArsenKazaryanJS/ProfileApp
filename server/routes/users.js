const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/middleares");
const UsersControllers = require("../controllers/UsersControllers");
const controller = new UsersControllers();

// USERS ROUTES
router.get("/users", controller.getAllUsers);
router.post("/register", controller.authRegister);
router.get("/me", checkAuth, controller.authMe);
router.put("/user", checkAuth, controller.updateUser);
router.patch("/login", controller.authLogin);
router.put("/logout", checkAuth, controller.logOut);
router.post("/add-friend", checkAuth, controller.addFriend);
router.post("/remove-friend", checkAuth, controller.removeFriend);
router.get("/search", checkAuth, controller.searchUsers);




module.exports = router;
