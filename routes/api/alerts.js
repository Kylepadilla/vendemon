const express = require("express");
const router = express.Router();
const Alert = require("../../models/Alerts");

// Defining methods for the alertsController


router.post("/create", (req, res) => {
  console.log("server side post " + JSON.stringify(req.body.data));
  
    Alert
      .create(req.body.data)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});

router.get("/create", (req, res)=> {
    Alert
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/create/:id", (req, res)=> {
    Alert
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

});








module.exports = router;
