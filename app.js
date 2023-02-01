const express = require('express');
const { frequencyCounter } = require('../express-routing/helpers');
const app = express();
const expressError = require('./expressError')
const {checkAndConvertNums, findMode, findMean, findMedian} = require('./helpers');

app.get('/mean', function(req, res, next){
    if(!req.query.nums) {
        throw new expressError('Invalid input', 400)
    }
    let numToStr = req.query.nums.split(',');
    let nums = checkAndConvertNums(numToStr);
    if (nums instanceof Error) {
        throw new expressError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: findMean(nums)
    }

    return res.send(result);
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new expressError('Invalid input', 400)
    }
    let numToStr = req.query.nums.split(',');
    let nums = checkAndConvertNums(numToStr);
    if (nums instanceof Error) {
        throw new expressError(nums.message);
    }

    let result = {
        operation: 'median',
        result: findMedian(nums)
    }

    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new expressError('Invalid input', 400)
    }
    let numToStr = req.query.nums.split(',');
    let nums = checkAndConvertNums(numToStr);
    if (nums instanceof Error) {
        throw new expressError(nums.message);
    }

    let result = {
        operation: 'mode',
        result: findMode(nums)
    }

    return res.send(result);
});

app.use(function(req, res, next) {
    const error = new expressError('Page not found', 404);

    return next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);

    return res.json({
        error: error,
        message: error.message
    });
});

app.listen(3000, function() {
    console.log(`Starting server on port 3000`);
})
