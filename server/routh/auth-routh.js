const express = require("express");
const router = express.Router();
const {home,register} = require("../Controllers/auth-controllers");

// router.get('/', (req, res) => {
//     res.status(200).send("Shakeeb Raza");
// });
router.route('/').get(home);

router.route('/register').get(register);

module.exports = router;
