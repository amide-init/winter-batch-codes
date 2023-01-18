const router = require('express').Router();

router.get('/', (req, res) => {
   //retrive all docs of todos
   res.send("Hello GET")

});

router.post('/', (req, res) => {
    // saving todos
    res.send("Hello POST")
});


router.get('/:id', (req, res) => {
    //retrive single doc of todos
 
 });
 



router.patch('/', (req, res) => {
   res.send("Hello PATCH")
})

router.delete('/', (req, res) => {
    res.send("Hello Delete")
})

module.exports = router;