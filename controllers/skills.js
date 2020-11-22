const Skill = require('../models/skill');
const { get } = require('../routes');

module.exports = {
    index,
    show,
    new:newSkill,
    create,
    delete:deleteSkill
}

function create(req,res) {
    Skill.create(req.body);
    //console.log(Skill.create(req.body.skills))
    res.redirect('/skills')
}

function newSkill(req,res) {
    res.render('skills/new')
}

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req,res) {
    //console.log(req.params.id)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        // If you would like to display the number of the todo within the list
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
      });
}

function deleteSkill(req,res) {
    console.log(req.params.id)
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}