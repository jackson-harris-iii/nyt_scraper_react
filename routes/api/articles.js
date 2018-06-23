const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with "/api/articles/:id"
router
    .route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;
