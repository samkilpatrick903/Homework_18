const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", async(req, res) => {
  try  {
  let docs = await Workout.aggregate([
     {
       $addFields: {totalDuration: {$sum: "$exercises.duration"}}
     }
   ])
    console.log(docs);
    res.json(docs);
  }
  catch(err) {
    console.log(err)
  }
});
module.exports = router;