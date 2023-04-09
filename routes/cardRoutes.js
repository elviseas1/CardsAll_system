const express = require('express')
const router = express.Router()
const CardController = require('../controllers/CardController')

// helpers
const checkAuth = require('../helpers/auth').checkAuth

//
// router.post("/add", checkAuth, CardController.createToughtSave);
// router.get("/edit/:id", checkAuth, CardController.updateTought);
// router.post("/edit", checkAuth, CardController.updateToughtSave);
// router.get("/dashboard", checkAuth, CardController.dashboard);
// router.post("/remove", checkAuth, CardController.removeTought);
router.get('/card', checkAuth, CardController.showCard)
router.get('/cards', checkAuth, CardController.showCardList)
router.get("/add", checkAuth, CardController.createCard);
router.post("/add", checkAuth, CardController.createCardSave);


module.exports = router
