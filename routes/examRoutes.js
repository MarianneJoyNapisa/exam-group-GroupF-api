const express = require('express');
const router = express.Router();

let exams = [
    { id: '1', subject: 'Filipino', date: '2025-05-10' },
    { id: '2', subject: 'Rizal', date: '2025-05-15' }
];

// GET /api/exams - Fetch all exams
router.get('/exams', (req, res) => {  
    try {
        res.status(200).json(exams);
        res.json({ message: "Group F API" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch exams' });
    }     
  });


  // POST /api/exams - Create a new exam - NAPISA
router.post('/exams', (req, res) => {
    try {
        const { subject, date } = req.body;
        if (!subject || !date) {
            return res.status(400).json({ error: 'Subject and date are required' });
        }

        const newExam = {
            id: String(exams.length + 1),
            subject,
            date
        };

        exams.push(newExam);
        res.status(201).json(newExam);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create exam' });
    }
});

// PUT /api/exams/:id - Update an exam
router.put('/exams/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { subject, date } = req.body;
        const examIndex = exams.findIndex(exam => exam.id === id);

        if (examIndex === -1) {
            return res.status(404).json({ error: 'Exam not found' });
        }

        exams[examIndex] = { ...exams[examIndex], subject, date };
        res.status(200).json(exams[examIndex]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update exam' });
    }
});

module.exports = router;