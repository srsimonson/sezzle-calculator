const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "calculator_data" ORDER BY id DESC LIMIT 10;`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    let operator = req.body.operator;
    let firstNumber = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    let answer = req.body.answer;
    
    const sqlText = `INSERT INTO "calculator_data" (expression, answer) VALUES ('${firstNumber}${operator}${secondNumber}', '${answer}');`;
    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;