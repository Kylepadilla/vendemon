const router = require("express").Router();
const alertsController = require("../../controller/alertsController");


router.route("/dashboard")
  .get(alertsController.findAll)
  .post(alertsController.create);


router
  .route("/:id")
  .get(alertsController.findById)
  .put(alertsController.update)
  .delete(alertsController.remove)

module.exports = router;
