const express = require("express");
const { allUsers } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");
const { isAdmin } = require("../middleware/auth");
const { singleUser } = require("../controllers/userController");
const { editUser } = require("../controllers/userController");
const { deleteUser } = require("../controllers/userController");
const router = express.Router();

// auth routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser); 

// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser); 

// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser); 

module.exports = router;