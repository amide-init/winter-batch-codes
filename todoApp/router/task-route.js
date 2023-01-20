const router = require('express').Router();
const Task = require('../model/task')


router.post('/', (req, res) => {
    const task = new Task({
        title: req.body.title,
        decription: req.body.description,
    });

    task.save()
        .then((_) => {
            res.json({ success: true, message: "Data has been added" })
        })
        .catch((err) => {
            res.json({ success: false, error: err })
        })

});

router.get('/', (req, res) => {
    Task.find()
        .exec()
        .then((results) => {
            const data = results.map((result) => {
                return {
                    id: result._id,
                    title: result.title,
                    description: result.decription,
                    createdAt: result.createdAt
                }
            })
            res.json({ success: true, data: data })
        })
        .catch((err) => {
            res.json({ success: false, error: err })
        })
});



router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findOne({ _id: id })
        .exec()
        .then((result) => {
            const data = {
                id: result._id,
                title: result.title,
                description: result.decription,
                createdAt: result.createdAt
            }
            res.json({ success: true, data: data })
        })
        .catch((err) => {
            res.json({ success: false, error: err })
        })
    //retrive single doc of todos

});




router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body
    Task.updateOne({_id:id}, {$set : data})
        .then((_) => {
            res.json({ success: true, message: "Data has been updated"})
        })
        .catch((err) => {
            res.json({ success: false, error: err })
        })
   
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Task.deleteOne({_id:id})
        .then((_) => {
            res.json({ success: true, message: "Data has been deleted"})
        })
        .catch((err) => {
            res.json({ success: false, error: err})
        })
})

module.exports = router;