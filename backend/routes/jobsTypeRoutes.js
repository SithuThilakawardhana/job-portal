const express = require("express");
const router = express.Router();
const { createJobType,allJobsType } = require ('../controllers/jobsTypeController');
const { isAuthenticated } = require("../middleware/auth");

// jobs type routes

//router /api/type/create
router.post('/type/create', isAuthenticated, createJobType)

//router /api/type/jobs
router.get('/type/jobs', allJobsType)



module.exports = router;