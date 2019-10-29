const express = require('express');
const router = express.Router();


router.get('/address', function(res, res) {
    res.render('address', {name: 'thing', phoneNumber: 'otherThing', address:'otherthing'});
})

router.get('/', (req, res) => {
    res.send("PONG");
})

module.exports = router;