const router = require('express').Router()
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => {
            return res.json(notes)
        })
        .catch(error => res.status(500).json(error))
});

router.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    store
        .addNote(req.body)
        .then(note => {
            return res.json(note)
        })
        .catch(error => res.status(500).json(error))
});

router.delete('/notes/:id', (req, res) => {
    store
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(error => res.status(500).json(error))
})

module.exports = router