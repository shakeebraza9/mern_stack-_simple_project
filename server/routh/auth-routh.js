const express = require("express");
const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).send("Shakeeb Raza");
// });
router.route('/').get((req,res)=>{
    res.
    status(200).
    send("Shakeeb Raza");
});
router.route('/register').get((req,res)=>{
    res.status(200).send("wellcome to over register page");
});
module.exports = router;
