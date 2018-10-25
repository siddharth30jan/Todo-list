const route=require('express').Router();
let todos=[
    {task: "This is the first task"},
    {task: "This is the second task"}
];
route.get('/',function(req,res,next){
    res.render('todo',{todos})
})
route.post('/',function(req,res,next){
    todos.push({
        task: req.body.newtodo
    });
        res.redirect('todo');//Redirect is always a get request
})
module.exports=route;