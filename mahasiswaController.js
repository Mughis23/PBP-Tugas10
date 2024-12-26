const express = require('express');
const router = express.Router();
const db = require('../model/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (error, results) => { 
        if (error) {
            console.error('Error Fetching mahasiswa', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

router.get('/:nim', (req, res) => {
    const mahasiswaId = req.params.nim;
    db.query('SELECT * FROM mahasiswa WHERE nim = 2023002', [mahasiswaId], (error, results) =>{
        if (error) {
            console.error('Error fetching mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Mahasiswa Not Found'});  
        } else {
            res.json(results[0]);
        }
    });
});

router.put('/mahasiswa/:nim', (req,res) => {
    const mahasiswaNIM = req.params.nim;
    const { nama, gender, prodi, alamat} = req.body;
    db.query('UPDATE mahasiswa SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?', 
    [nama, gender, prodi, alamat, mahasiswaNIM], (error) => {
        if (error) {
            console.error('Error updating mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        } else {
            res.json('Updating mahasiswa succesfully');
        }
    });
});

module.exports = router;