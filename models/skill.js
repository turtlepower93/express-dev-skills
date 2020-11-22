module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

const skills = [
    {id: 212545, skill:'HTML'},
    {id: 212515, skill:'CSS'},
    {id: 110545, skill:'JS'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    //console.log(id)
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    console.log(skill)
    skill.id = Date.now() % 100000;
    skills.push(skill);
    console.log(skills)
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(t => t.id === id);
    skills.splice(idx, 1);
  }