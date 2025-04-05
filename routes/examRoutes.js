const express = require('express');
const router = express.Router();

router.get('/exam-groupF', (req, res) => {
    res.json({ message: "Group F API" });
  });

let exams = [
    { id: '1', subject: 'Araling Panlipunan', date: '2025-05-10' },
    { id: '2', subject: 'Rizal', date: '2025-05-15' }
];

module.exports = router;