const express = require("express");
const { mean, median, convertAndValidateNumsArray } = require("./helpers");
const app = express();

app.get("/mean", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mean",
        result: mean(nums),
    };
    debugger;
    res.send(result);
});

app.get("/median", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "median",
        result: median(nums),
    };
    res.send(result);
});

app.get("/mode", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mode",
        result: mode(nums),
    };

    return res.send(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
