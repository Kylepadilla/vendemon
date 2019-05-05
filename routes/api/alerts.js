const router = require("express").Router();
const alertsController = require("../../controller/alertsController");

// Matches with "/api/alerts"
router.route("/")
  .get(alertsController.findAll)
  .post(alertsController.create);

// Matches with "/api/alerts/:id"
router
  .route("/:id")
  .get(alertsController.findById)
  .put(alertsController.update)
  .delete(alertsController.remove)

module.exports = router;
