const { Router }  = require("express");

const router = Router()

const AllUserController = require("./controllers/AllUserController")
const UserController = require("./controllers/UserController")
const User2Controller = require("./controllers/User2Controller")

router.post("/", AllUserController.handle);
router.get("/", AllUserController.handle);

router.post("/User", UserController.handle);
router.get("/User", UserController.handle);

router.post("/User/1", User2Controller.handle);
router.get("/User/1", User2Controller.handle);

module.exports = router;
