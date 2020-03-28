const express = require('express');
const router = express.Router();
const models =  require('../../models');
const Question = models.Question;

router.get('/', async (req, res, next)=> {
  try {
    const questions = await Question.findAll({
      include: ['options']
    });
    res.status(200).json(questions);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


module.exports= router;