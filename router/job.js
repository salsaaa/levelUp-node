const Job = require('../models/job');
const express = require('express');
const router = express.Router();
const CustomError = require('../helpers/customError');
const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const validationMiddleware = require('../middlewares/validation');

// router.get('/', async (req, res, next) => {
//     const jobs = await User.find();
//     res.json(jobs);
// });

router.post('/', authenticationMiddleware, async (req, res, next) => {
    const { userId, title, description } = req.body;
    const job = new Job ({ userId, title, description });

    await job.save();
    res.json(job);
});

router.patch('/', authenticationMiddleware, async (req, res, next) => {
    const { title, description } = req.body;
    const job = new Job ({ title, description });

    await job.save();
    res.json(job);
});

module.exports = router;