const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Dogs");
})

router.post('/', (req, res) => {
    res.send("Create Dog");
})

router.get('/:id', (req, res) => {
    res.send("Details of one Dog");
})

router.get('/:id/edit', (req,res) => {
    res.send("Editing one Dog");
})

module.exports = router;