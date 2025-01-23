const express = require('express');
const router = express.Router();

// GET cart contents
router.get('/', async (req, res) => {
    try {
        res.send("Get Cart Route");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT bulk update cart
router.put('/', async (req, res) => {
    try {
        res.send("Put Cart Route")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;